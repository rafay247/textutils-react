import React, { useState } from 'react'

export default function Textform(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");

    }
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick = () => {
        let newText = ""
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value)

    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to clipboard", "success");

    }
    const handleRmoveSpacerClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }
    const btnClassObj =  `btn btn-${props.mode === 'dark' ? 'light': 'dark'} mx-1 my-1`

    const [text, setText] = useState("")
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className='container my-3' >
                    <h1>{props.heading}</h1>
                    <div className="mb-4" >
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6" style={{ backgroundColor: props.mode === 'dark' ? '#252525' : 'whitesmoke', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                    </div>
                    <button disabled = {text.length === 0} className={btnClassObj} onClick={handleUpClick}>Convert to Uppercase</button>
                    <button disabled = {text.length === 0} className={btnClassObj} onClick={handleLoClick}>Convert to Lowercase</button>
                    <button disabled = {text.length === 0} className={btnClassObj} onClick={handleClearClick}>Clear text</button>
                    <button disabled = {text.length === 0} className={btnClassObj} onClick={handleCopyClick}>Copy text</button>
                    <button disabled = {text.length === 0} className={btnClassObj} onClick={handleRmoveSpacerClick}>Remove extra spaces</button>
                </div>
                <div className="container my-2">
                    <h2>Your text summery</h2>
                    <p>{text.split(/[^\s]+/).length - 1} words {text.trim().length} character</p>
                    <p>{0.008 * (text.split(/[^\s]+/).length - 1)} Minutes read</p>
                    <h3>Preview</h3>
                    <p>{text.length > 0 ? text : "Nothing to preview !"}</p>
                </div>
            </div>
        </>
    )
}




