import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Input from './Input';
import ChapterBox from './ChapterBox';


class App extends Component {
  constructor (){
    super ();
    this.state = {story: "" }
    this.addStory = this.addStory.bind(this);
    this.addChapterButton = this.addChapterButton.bind(this);
    this.deleteChapter = this.deleteChapter.bind(this);
    this.editChapter = this.editChapter.bind(this);
  }

componentDidMount() {
    this.getStory();


  }

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

  editChapter(chapterId, text) {
    //axios call
    axios.put(`https://project2-a12a5.firebaseio.com/story/${chapterId}/title/.json`, [text]);
  }

  deleteChapter(chapterId) {
    axios.delete(`https://project2-a12a5.firebaseio.com/story/${chapterId}/title/.json`)
             .then(() => {
                this.getStory();
             });
  }

addStory(textVal) {
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

  addChapterButton(textVal) {
      this.addStory(textVal);
    }


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

export default App;;
