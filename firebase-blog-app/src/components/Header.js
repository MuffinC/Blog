import React from 'react'
import {Link} from "react-router-dom";
//29:35
const Header = (active, setActive) => {
  return (
    <nav className='navbar navbar-extend-lg navbar-light bg-light'>

        <div className='contianer-fluid.bg-faded.padding-media'>
            <div className='container padding-media'>
                <nav className="navbar navbar-toggleable-md navbar-light">
                    <button 
                    className='navbar-toggle mt-3 '
                    type ='button' 
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    data-bs-parent='#navbarSupportedContent'
                    aria-controls='#navbarSupportedContent'
                    aria-expanded='true'
                    aria-label='Toggle Navigation'
                    >
                        <span className='fa fa-bars'></span>

                    </button>
                    <div className='collpase navbar-collaps'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0' id="navbarSupportedContent">
                            <Link to="/" style={{textDecoration: "none"}}>
                            <li 
                            className={`nav-item nav-link ${active==="home" ? "active":""}`} 
                            onClick={()=>setActive("home")}
                            >
                                
                                Home</li>

                            </Link>
                            <li className='nav-item nav-link'>Create</li>
                            <li className='nav-item nav-link'>About</li>
            

                        </ul>
                        <div className='row g-3'>
                            <ul className='navbar-nav me-auto mb-2 mb-lg-0' >
                                <li className='nav-item nav-link'>Login</li>
                                
                

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </nav>
  )
}

export default Header