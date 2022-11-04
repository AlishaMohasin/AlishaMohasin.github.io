// import  "./Styles/Project.css"
import  "./style/Project.scss"
import { FaReact,FaHtml5 } from "react-icons/fa"
import {SiRedux ,SiCss3,SiJavascript,SiChakraui,SiNetlify,SiMongodb,SiVercel} from "react-icons/si"

import everhour from "./assests/everhour.png"
import monday from "./assests/monday.jpg"
import mamaearth from "./assests/mamaearth.jpg"



const Project=()=>{
    return(
        <div className="purple" id="project">
             <h2 className="kill">PROJECTS</h2>
        <div className="project-box">
       
              
        <div className="project-box3">
                    <div className="ever">
                        <img width="100%" src={everhour}alt="" />
                  
                   </div>
                   <div className="hour">
                   <h4 className="bg"> Website:Everhour-clone</h4>
                    <p>  Everhour is a time management system with a strong focus on integration. If you're managing all your tasks in a specialized system, such as Asana, Trello, Basecamp, where there is no native time tracking functionality</p>
                    <p className="tech">TECH STACK USED</p>
                    <p><FaReact color="brown" size="30px"/> <SiRedux color="brown" size="30px"/> <SiNetlify  color="brown" size="30px"/><SiJavascript color="brown" size="30px"/> <SiChakraui color="brown" size="30px"/> <SiMongodb color="brown" size="30px"/></p>
                    <a href="https://the-great-pravhatray-site.netlify.app/" ><button>Live</button></a>
                    <a href="https://github.com/pravhatray/determined-wax-1018" ><button>Github</button></a>
                  
                   </div>
                </div>
              
                <div className="project-box2">
                    <div className="ever">
                        <img width="100%" src={monday} alt="" />
                  
                   </div>
                   <div className="hour">
                   <h4 className="bg"> Website:Monday.com-clone</h4>
                    <p> monday.com  is a cloud-based platform that allows users to create their own applications and work management software. </p>
                    <p className="tech">TECH STACK</p>
                    <p><FaReact color="brown" size="30px"/><FaHtml5 size="33px" color="brown"/>  <SiCss3  color="brown"  size="30px"/> <SiJavascript  color="brown"  size="30px"/><SiChakraui color="brown" size="30px"/> <SiVercel color="brown" size="30px"/></p>
                   <a href="https://alin-omega.vercel.app/"><button>Live</button></a> 
                   <a href="https://github.com/AlishaMohasin/scrawny-liquid-7267/tree/main/mondayapp"><button>Github</button></a> 
                 
                   </div>
                </div>
              
              
              
              
              
              
              <div className="project-box1">
            <div className="ever">
                    
                    <img className="pro" width="100%" src={mamaearth} alt="" />
                 
                    </div>
                    <div className="hour">
                    <h4 className="bg"> Website: Mamaearth-clone</h4>
                   <p>  The Mamaearth company is an Indian brand and is based out of Gurugram, Haryana. It was founded by Varun and Ghazal Alagh in 2016 to provide toxin-free, natural baby care, skincare and haircare products. </p>
                   <p className="tech">TECH STACK </p>
                   <p className="react"><FaHtml5 size="33px" color="brown"/>  <SiCss3  color="brown"  size="30px"/> <SiJavascript  color="brown"  size="30px"/> <SiNetlify  color="brown" size="30px"/></p>

                  <a  href="https://jocular-faun-39bb45.netlify.app/" ><button>Live</button></a> 
                  <a href="https://github.com/rkshristi123/our-project-mamaearth" > <button >Github</button></a>
                    </div>
                   
                  
                   
                </div>
               
               

                
              


                

        </div>
        </div>
    )
    
}
export default Project