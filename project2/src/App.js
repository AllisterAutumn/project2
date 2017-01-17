import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Input from './Input';



class App extends Component {
  constructor (){
    super ();
    this.state = {
      story: ""
    }
    this.addStory = this.addStory.bind(this);
    this.addChapterButton = this.addChapterButton.bind(this);
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
       this.setState({story: response.data});
    }).catch((error) => {
      console.log(error);

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

        let chapter = this.state.story;
        let book = Object.keys(chapter).map((data,i)=>{
          return (
            <div>

            <button  onClick={()=> {axios.put(`https://project2-a12a5.firebaseio.com/story/${data}/title/.json`, [document.getElementById('edit').value])}}>edit</button>
            <input  id="edit" placeholder={data} />
          <iframe key={i} src={`https://project2-a12a5.firebaseio.com/story/${data}/title/.json`}></iframe>

          <button onClick={()=>{axios.delete(`https://project2-a12a5.firebaseio.com/story/${data}/.json`)}}>X</button>

          </div>
          )
        })
    return (
      <div>
      <header>tell (y)our  story</header>
     <div className="placemat"> {book}</div>
      <Input addChapterButton={this.addChapterButton}/>


      </div>
    )
  }
}

export default App;
