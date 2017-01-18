import React, { Component } from 'react';
import axios from 'axios';

class ChapterBox extends Component {

  handleEdit() {
    console.log(this.props.chapterId, this.refs.edit.value);
    this.props.editChapter(this.props.chapterId, this.refs.edit.value);
  }

  handleDelete() {
    this.props.deleteChapter(this.props.chapterId);

  }

  render(){
    return (
      <div>
        <button onClick={()=>{this.handleDelete()}}>delete</button>
        <textarea id="edit" ref="edit"  >{this.props.chapterData}</textarea>
        <button  onClick={()=>{this.handleEdit()}}>edit</button>
        <li>{this.props.chapterData}</li>
      </div>
    )
  }
}

  ChapterBox.propTypes = {
    chapterData: React.PropTypes.string.isRequired,
    chapterId: React.PropTypes.string.isRequired,
    deleteChapter: React.PropTypes.func.isRequired,
    editChapter: React.PropTypes.func.isRequired
}


  export default ChapterBox;

