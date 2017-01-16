import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Input from './Input';
import StoryBox from './StoryBox';


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



  render(books) {

        let chapter = this.state.story;
        let book = Object.keys(chapter).map((data,i)=>{
          return (
            <div>
          <li key={i}>{data}</li>

          <button key={-i} onClick={()=>{
            axios.delete(`https://project2-a12a5.firebaseio.com/${data}.json`)}}>X</button>
          </div>
          )
        })
    return (
      <div>
      <Input addChapterButton={this.addChapterButton}/>
      <StoryBox details={this.state.story} />
      <ul>{book}</ul>
      </div>
    )
  }
}

export default App;
