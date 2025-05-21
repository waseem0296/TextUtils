import React,{useState} from 'react'

export default function About(props) {
    // const[btntxt,setbtnText]=useState("Enable to dark mode");
    // const [mystyle,setmyStyle]=useState({
    //     color:'white',
    //     backgroundColor:'black'
    // })
    // const handletoChangeColor=()=>
    // {
    //     if(mystyle.color==='white')
    //     {
    //         setmyStyle(
    //             {
    //                 color:'black',
    //                 backgroundColor:'white'
    //             }
    //         )
    //         setbtnText('Enable to dark mode');
    //     }
    //     else
    //     {
    //         setmyStyle(
    //             {
    //                 color:'white',
    //                 backgroundColor:'black'
    //             }
    //         )
    //         setbtnText('Enable to light mode')
    //     }
    // }
    let mystyle={
      color:props.mode==='dark'?'white':'#042743',
      backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
    
    }
  return (
    <div className='container my-3'style={mystyle}>
        <h2 style={{ color:props.mode==='dark'?'white':'#042743'}}>{props.heading}</h2>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body"style={mystyle}>
        TextUtils gives you a way to analyze your text quickly and efficiently. Be it Word Count Character Count or
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button  collapsed"  style={mystyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong> Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={mystyle}>
      TextUtils is a powerful tool designed to simplify text editing tasks, whether you're looking to remove extra spaces, convert text cases, or count characters and words. Its intuitive interface allows users to quickly make adjustments and improve the clarity and readability of their content. 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
     <strong>    Browser-Compatible  </strong> 
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body"style={mystyle}>
       

TextUtils offers a range of browser-compatible tools designed to make text editing easier and more efficient. Whether you're working on a blog post, report, or any written content, TextUtils provides features like case conversion, word counting, and whitespace removal directly within your browser.
      </div>
    </div>
  </div>
</div>
{/* <div className="container my-3">
    <button className=" btn btn-primary" onClick={handletoChangeColor}>{btntxt}</button>
</div> */}
    </div>
  )
}
