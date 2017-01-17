import React, { Component } from 'react';


class Input extends Component {
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
