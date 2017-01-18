import React, { Component } from 'react';


class Input extends Component {
  //This function is created to call the ref of the textarea and pass it into the addChapterButton function
  //And to give addChapter its own component
  makeChapter(){
    let textValue = this.refs.textArea.value;
    this.props.addChapterButton(textValue);
    console.log(textValue);
  }

render(){
  return (
    <div>
      <textarea  id="textarea" ref="textArea"> </textarea>
      <br/>
      <button id="write" type="submit" onClick={() => this.makeChapter()}>Write</button>
    </div>
  )
  }
}

Input.propTypes = {
  addChapterButton: React.PropTypes.func.isRequired
}


export default Input;
