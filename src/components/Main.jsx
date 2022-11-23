import { FaGithub,FaLinkedin } from 'react-icons/fa';
import React from 'react'
//  import './Styles/Main.css'
 import "./style/Main.scss"

import  profile from "./assests/profile1.png"
//  import Typical from "react-typical";

const Main = () => {
    return (
        <div className='main'>
            <div className='main__container'>


                <div className="main__content">

                    <div className="text">
                        
                            <p className='hey'>HEY THERE!</p>
                            <h1>I am Alisha Mohasin</h1>
                            <p className="typical">
                       
                             A  Full Stack  Web developer
                               </p>
                       
                          
                             {/* <div className="icons">
                 
                 
                   <a href="https://github.com/AlishaMohasin">
                    <i className="icon"><FaGithub size={"40px"} /></i>
                   </a>
                   <a href="https://www.linkedin.com/in/alishamohasin/">
                    <i className="icon"><FaLinkedin size={"40px"} /></i>
                   </a>

                   </div> */}


                    <div className="buttons">
                      
                        <a href="Alisha_Mohasin _Resume.pdf" download="Alisha_Mohasin _Resume.pdf"><button> Download Resume</button></a>
                    </div>

                    </div>


                </div>


                <div className="main__img">
                    <img src={profile} width="400px" alt="" />
                </div>


            </div>



        </div>
    )
}


export default Main