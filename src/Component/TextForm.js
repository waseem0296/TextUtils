import React,{useState} from 'react'

export default function TextForm(props) {
    
    const[line,setLine]=useState(0);
    const[text,setText]=useState('');
    const handletochange=(event)=>
    {
        setText(event.target.value);
    }
    const UpperCase=()=>
    {
        let newText=text.toUpperCase();
        setText(newText);
        props.showalert('UpperCase is coverted','success');
    }
    const LowerCase=()=>
        {
            let newText=text.toLowerCase();
            setText(newText);
            props.showalert('LowerCase is coverted','success');
        }
        const ClearText=()=>
            {
                let newText="";
                setText(newText);
                props.showalert('All text is clear','success');
            }
            const CountLines=()=>
                {
                    let newline=text.split('\n').length;
                    setLine(newline);
                    props.showalert('Lines is counted','success');
                }
                const CopyText=()=>
                {
                    navigator.clipboard.writeText(text);
                    props.showalert('Copy to clipboard','success')
                }
  return (
    <>
    <div className='container my-2' style={{color:props.mode==='dark'? 'white':'black'}} >
      <h2 className='mb-3'>{props.heading}</h2>
      <textarea className='form-control'rows='9'value={text} onChange={handletochange}style={{backgroundColor:props.mode==='dark'? '#13466e':'white',color:props.mode==='dark'?'white':'#042743'}}></textarea>
      <button disabled={text.length===0}className="btn btn-primary mx-3 my-3" onClick={UpperCase}>Convert to UpperCase</button>
      <button  disabled={text.length===0}className="btn btn-primary mx-3 my-3"onClick={LowerCase}>Convert to LowerCase</button>
      <button  disabled={text.length===0}className="btn btn-primary mx-3 my-3"onClick={ClearText}>Convert to Clear Text </button>
      <button  disabled={text.length===0}className="btn btn-primary mx-3 my-3"onClick={CopyText}>Copy Text </button>
      <button  disabled={text.length===0}className="btn btn-primary mx-3 my-3"onClick={CountLines}>Lines Counted</button>
    </div>
    <div className="container my-4" style={{color:props.mode==='dark'? 'white':'black'}}>
        <h2>Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <h2>Time to read the Word</h2>
        <p>{0.008*text.split(' ').filter((element)=>{return element.length!==0}).length}Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Not Preview!'}</p>
        <h2>Total Lines:</h2>
        <p>{line}</p>
    </div>
    </>
  )
}
