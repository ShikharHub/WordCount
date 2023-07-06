import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("UpperCase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
        console.log("UpperCase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClearClick=()=>{
        console.log("Cleared"+text);
        let newText="";
        setText(newText);
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    
    const [text,setText]=useState("Enter Text");
    //setText("Shikhar");
  return (
    <>
    <div>
    <div className="mb-3">
        <label htmlFor="myBox" className="form-label"><h3>{props.heading}</h3></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
    </div>
    <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert Text to Uppercase</button>
    <button className='btn btn-primary mx-2'  onClick={handleLoClick}>Convert Text to Lowercase</button>
    <button className='btn btn-primary mx-2 my-2'  onClick={handleClearClick}>Clear text</button>
    <button className='btn btn-primary mx-2 my-2'  onClick={handleCopy}>Copy text</button>

    </div>
    <div className='container my-4'>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Needs approx {0.008*text.split(" ").length} Minutes of Reading</p>
        <h3>Preview of your text</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
