import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Input from './Input';
import ChapterBox from './ChapterBox';

//The 'Tweeder', 'React Messenger', and 'Star wars routing' labs and lectures were very helpful
//in giving me a reference to study and help me write the correct syntax while writing my code
class App extends Component {
  constructor (){
    super ();
    this.state = {story: "" }
    this.addChapter = this.addChapter.bind(this);
    this.addChapterButton = this.addChapterButton.bind(this);
    this.deleteChapter = this.deleteChapter.bind(this);
    this.editChapter = this.editChapter.bind(this);
  }

//This function fetches the 'Get' request as the page loads and renders all of them on the page from Firebase
componentDidMount() {
    this.getStory();
  }

//Here is the Get request that also sets the state to the response object called from firebase or to an empty object
//depending on which function needs to use the state.
  getStory() {
    axios({
      url: '/story.json',
      baseURL: 'https://project2-a12a5.firebaseio.com',
      method: "GET"
    }).then((response) => {
        console.log(response.data);
        this.setState({story: response.data || {} });
    }).catch((error) => {
        console.log(error);

    });
  }

//This function is used to edit chapter boxes. It is passed down to the ChapterBox component onClick
//It calls the getStory request in order to reload the page upon each button click.
  editChapter(chapterId, text) {
    axios.put(`https://project2-a12a5.firebaseio.com/story/${chapterId}/title/.json`, [text])
    .then(()=>{
    this.getStory();
    })
  }
  //This function is used to delete chapter boxes. It is passed down to the ChapterBox component onClick
//It calls the getStory request in the 'THEN' (which is a promise) so that the calling and rendering is added sequentially

  deleteChapter(chapterId) {
    axios.delete(`https://project2-a12a5.firebaseio.com/story/${chapterId}/title/.json`)
      .then(() => {
        this.getStory();
     });
  }

//This adds chapters to the DOM once they have been entered into the textarea onClick

addChapter(textVal) {
    let chapter = { title: textVal};
    axios({
      url: '/story.json',
      baseURL: 'https://project2-a12a5.firebaseio.com',
      method: "POST",
      data: chapter
    }).then((response) => {
      this.getStory();
    }).catch((error) => {
      console.log(error);
    });
  }
//The function is then passed into the addChapterButton so that it can be easily
//passed down into the Input component
  addChapterButton(textVal) {
      this.addChapter(textVal);
    }

    //The book variable contains a mapped over the ChapterBox component each time a chapter box is added to the DOM.
    //The ChapterBox component is then passed back into the map function
    //State.story is a function and the way to search the function is to pass it the chapterID which is basically
    //the IDs created by firebase for each piece of data added to it.
    //I also called the keys in the key value pairings of the object 'title' which is used to access the values of the objects.
  render() {
     let book = Object.keys(this.state.story).map((chapterId,index)=>{
        let chapterData = this.state.story[chapterId];
          return (
              <ChapterBox chapterData={chapterData.title} chapterId={chapterId} deleteChapter={this.deleteChapter} editChapter={this.editChapter}/>
          )
    })
    return (
      <div>
        <header>tell (y)our  story</header>
        <ul className="placemat">{book}</ul>
        <Input addChapterButton={this.addChapterButton}/>
      </div>
    )
  }
}

export default App;
