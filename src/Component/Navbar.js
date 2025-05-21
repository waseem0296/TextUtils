import React from 'react'

export default function Navbar(props) {
  return (
    <>
    <div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} && navbar-${props.mode1} bg-${props.mode1}`} >
  
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">{props.home}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.about}</a>
        </li>
       
      </ul>
   
      <div className=  {`form-check form-switch text-${props.mode1==='primary'?'success':'primary'} mx-3`}>
  <input className="form-check-input" type="checkbox"onClick={props.togglemode1} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.btntxt1}</label>
</div>
      <div className=  {`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox"onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.btntxt}</label>
</div>
    </div>
  </div>
</nav>

    </div>

    </>
  )
}
