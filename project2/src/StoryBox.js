import React, { Component } from 'react';
import axios from 'axios';


class  StoryBox extends Component{

render (){
  const {chapter} = this.props
return (

Object.keys(chapter).map((data,i )=> {

      <div>
          <iframe key={i} src={`https://project2-a12a5.firebaseio.com/story/${data}/title/.json`}></iframe>
          <button onClick={()=>{ axios.delete(`https://project2-a12a5.firebaseio.com/story/${data}/.json`)}}>X</button>
       </div>

          }
        )
      )
    }
}




StoryBox.propTypes = {
    chapter: React.PropTypes.func.isRequired
     }

export default StoryBox;
