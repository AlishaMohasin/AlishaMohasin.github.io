import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "./style/Header.scss"
import "./style/Main.scss"


import CloseIcon from '@mui/icons-material/Close';
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';

const Header = () => {

    const [active,setActive] = useState(false);


    const showMenu = () => {
            setActive(!active)
    }

    return (
        <div className='header'>

                    <div className="header__logo">
                <h2> <i>Am</i></h2>
             
                    </div>

            <nav className={active ? 'navbar active' : 'navbar'}>

                <ul>
                    <div className="closed">
                       
                        <p> <CloseIcon className="close" onClick={showMenu}/></p>
                    </div>
                    <li>
                      
                        <a className="black"  href="#">Home</a> 

                    </li>
                    <li >
                     
                     <a className="black"  href="#aboutme">About Me</a> 
                    </li>
                    <li>
                        
                        <a className="black"  href="#skill">Skills</a>
                    </li>
                    <li>
                       
                        <a className="black" href="#project">Project</a>
                    </li>
               
                    <li>
                        
                        <a className="black" href="#contact">Contact</a>
                    </li>
                    <li>
                    
                            <a className="black"  href="Alisha_Mohasin _Resume.pdf" download="Alisha_Mohasin _Resume.pdf"> Resume</a>
                           
                    </li>
                </ul>
              
                        
                      
                   
            </nav>

                    <div className="changer">
                      
                        <DensityMediumOutlinedIcon className="menu" onClick={showMenu}  />
                    </div>
                    </div>
    )
}

export default Header