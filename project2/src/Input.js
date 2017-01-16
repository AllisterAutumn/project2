import React, { Component } from 'react';


class Input extends Component {
makeChapter(){
  let textarea = document.getElementById('textarea').value;
this.props.addChapterButton(textarea);
console.log(textarea);


}

render(){

  return (
    <div>
      <textarea  id="textarea" > </textarea>
      <button type="submit" onClick={() => this.makeChapter()}>Write</button>
     </div>
    )
  }
}

Input.propTypes = {
  addChapterButton: React.PropTypes.func.isRequired
}


export default Input;
