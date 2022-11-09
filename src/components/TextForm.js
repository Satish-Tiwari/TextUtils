import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText  = text.toUpperCase();
        setText(newText);
    }

    const handleloClick = () => {
        setText(text.toLowerCase());
    }
    
    const cleartext = () => {
        setText('');
    }

    const handleOnchange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

  const [text, setText] = useState('');
  //   text = "new text"; // wrong way to change the state 
  //   setText("new text"); // correct way to change the state
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={cleartext}>Clear Text</button>
    </div>
    
    <div className="container my-3">
        <h3>Your text Summery...</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h4>Preview</h4>
        <p>{text}</p>
    </div>
    </>
  )
}
