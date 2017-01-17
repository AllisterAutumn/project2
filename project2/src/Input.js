import React, { Component } from 'react';


class Input extends Component {
makeChapter(){
  let textarea = document.getElementById('textarea').value;
this.props.addChapterButton(textarea);
console.log(textarea);


}

render(){

  return (
    <div className="placemat">
      <textarea  id="textarea" > </textarea>
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
