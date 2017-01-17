import React, { Component } from 'react';
import axios from 'axios';

class ChapterBox extends Component {

  render(){
    this.props.chapterData;
    this.props.chapterId;

    return (
      <div>

        <button  onClick={()=> {axios.put(`https://project2-a12a5.firebaseio.com/story/${this.props.chapterId}/title/.json`, [this.refs.edit.value])}}>edit</button>
        <input ref="edit" placeholder={this.props.chapterData} />
        <button onClick={()=>{axios.delete(`https://project2-a12a5.firebaseio.com/story/${this.props.chapterId}/title/.json`);console.log(this.props.chapterId);}}>X</button>
        <li>{this.props.chapterData}</li>
      </div>
    )
  }
}

ChapterBox.propTypes = {
  chapterData: React.PropTypes.string.isRequired,
  chapterId: React.PropTypes.array.isRequired
}


export default ChapterBox;

/*<div>
                <button  onClick={()=> {axios.put(`https://project2-a12a5.firebaseio.com/story/${chapterId}/title/.json`, [this.refs.edit.value])}}>edit</button>
                <input  ref="edit" placeholder={chapterData.title} />
                <li key={i}>{chapterData.title}</li>
                <button onClick={()=>{axios.delete(`https://project2-a12a5.firebaseio.com/story/${chapterId}/.json`)}}>X</button>
            </div>*/
