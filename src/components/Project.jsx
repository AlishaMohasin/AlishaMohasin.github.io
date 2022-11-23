// import  "./Styles/Project.css"
import  "./style/Project.scss"
import { FaReact,FaHtml5 } from "react-icons/fa"
import {SiRedux ,SiCss3,SiJavascript,SiChakraui,SiNetlify,SiMongodb,SiVercel} from "react-icons/si"

import everhour from "./assests/Everhour.png"
 import monday from "./assests/Monday.png"
import mamaearth from "./assests/Mamaearth.png"
import beautyhub from "./assests/beautyhub.png"
import wheather from "./assests/wheather.png"
import deccan from "./assests/deccan.png"



const Project=()=>{
    return(
        <div className="purple" id="project">
             <h2 className="kill">PROJECTS</h2>
        <div className="project-box">
       
              
        <div className="project-box3">
                    <div className="ever">
                        <img width="100%" height={"350px"} src={ everhour}alt="" />
                  
                   </div>
                   <div className="hour">
                   <h4 className="bg"> Everhour-clone</h4>
                    <p> Everhour is a time management system with a strong focus on integration. If you're managing all your tasks in a specialized system, such as Asana, Trello, Basecamp, where there is no native time tracking functionality (or it's limited), you'll need to use a third-party service.</p>
                    <p className="tech">TECH STACK USED</p>
                    <p><FaReact color="#9d174d" size="30px"/> <SiRedux color="#9d174d" size="30px"/> <SiNetlify  color="#9d174d" size="30px"/><SiJavascript color="#9d174d" size="30px"/> <SiChakraui color="#9d174d" size="30px"/> <SiMongodb color="#9d174d" size="30px"/></p>
                    <a href="https://the-great-pravhatray-site.netlify.app/" ><button>Live</button></a>
                    <a href="https://github.com/pravhatray/determined-wax-1018" ><button>Github</button></a>
                  
                   </div>
                </div>
              
                <div className="project-box2">
                    <div className="ever">
                        <img width="100%" height={"350px"} src={monday} alt="" />
                  
                   </div>
                   <div className="hour">
                   <h4 className="bg"> Monday.com-clone</h4>
                    <p> Monday.com is a customizable web and mobile work management platform, designed to help teams and organizations with operational efficiency by tracking projects and workflows, visualizing data, and team collaboration. It includes automation capabilities and supports integrations with other work apps. </p>
                    <p className="tech">TECH STACK USED</p>
                    <p><FaReact color="#9d174d" size="30px"/><FaHtml5 size="33px" color="#9d174d"/>  <SiCss3  color="#9d174d"  size="30px"/> <SiJavascript  color="#9d174d"  size="30px"/><SiChakraui color="#9d174d" size="30px"/> <SiVercel color="#9d174d" size="30px"/></p>
                   <a href="https://alin-omega.vercel.app/"><button>Live</button></a> 
                   <a href="https://github.com/AlishaMohasin/scrawny-liquid-7267/tree/main/mondayapp"><button>Github</button></a> 
                 
                   </div>
                </div>
              
                <div className="project-box1">
            <div className="ever">
                    
                    <img className="pro" width="100%" height={"350px"} src={beautyhub} alt="" />
                 
                    </div>
                    <div className="hour">
                    <h4 className="bg"> Beauty Hub</h4>
                   <p>   A beautyhub, supply store or cosmetics store is a specialty retailer that sells cosmetics, hair-care products . The term "beautyhub"  is often associated with large chains that provide a large-format, glamorous shopping experience whereas "beauty supply store"</p>
                   <p className="tech">TECH STACK USED</p>
                   <p className="react"><FaReact color="#9d174d" size="30px"/> <SiRedux color="#9d174d" size="30px"/> <SiNetlify  color="#9d174d" size="30px"/><SiJavascript color="#9d174d" size="30px"/> <SiChakraui color="#9d174d" size="30px"/> <SiMongodb color="#9d174d" size="30px"/></p>

                  <a  href="https://beautyhubproject.netlify.app/" ><button>Live</button></a> 
                  <a href="https://github.com/Sagarsandbhor17/Beautyhub" > <button >Github</button></a>
                    </div>
                   
                  
                   
                </div>

              
              
              
              
              <div className="project-box1">
            <div className="ever">
                    
                    <img className="pro" width="100%" height={"350px"} src={mamaearth} alt="" />
                 
                    </div>
                    <div className="hour">
                    <h4 className="bg"> Mamaearth-clone</h4>
                   <p>  The Mamaearth company is an Indian brand and is based out of Gurugram, Haryana. It was founded by Varun and Ghazal Alagh in 2016 to provide toxin-free, natural baby care, skincare and haircare products. </p>
                   <p className="tech">TECH STACK USED</p>
                   <p className="react"><FaHtml5 size="33px" color="#9d174d"/>  <SiCss3  color="#9d174d"  size="30px"/> <SiJavascript  color="#9d174d"  size="30px"/> <SiNetlify  color="#9d174d" size="30px"/></p>

                  <a  href="https://jocular-faun-39bb45.netlify.app/" ><button>Live</button></a> 
                  <a href="https://github.com/rkshristi123/our-project-mamaearth" > <button >Github</button></a>
                    </div>
                   
                  
                   
                </div>
            
                <div className="project-box2">
                    <div className="ever">
                        <img width="100%" height={"350px"}  src={wheather} alt="" />
                  
                   </div>
                   <div className="hour">
                   <h4 className="bg">  Weather Forecast App</h4>
                    <p> These can be simply termed as the compact weather Forecast website, as they do not only tell about the temperature of that specific region instead they can describe the accurate time of the sunrise and sunset, the time of the rainfall, humidity levels, etc  </p>
                    <p className="tech">TECH STACK USED</p>
                    <p><FaHtml5 size="33px" color="#9d174d"/>  <SiCss3  color="#9d174d"  size="30px"/> <SiJavascript  color="#9d174d"  size="30px"/><SiNetlify  color="#9d174d" size="30px"/></p>
                   <a href="https://stunning-cocada-f78dc5.netlify.app/"><button>Live</button></a> 
                   <a href="https://github.com/AlishaMohasin/weather-app/tree/main/weather%20app"><button>Github</button></a> 
                 
                   </div>
                </div>
               
               
              
       
                
                <div className="project-box3">
                    <div className="ever">
                        <img width="100%" height={"350px"} src={deccan}alt="" />
                  
                   </div>
                   <div className="hour">
                   <h4 className="bg">Deccan Chronicle-clone</h4>
                    <p> News Website Where You can read any news like Political News, Business News, Economy News, Cricket News, Technology News, Social News and Other Types Of news. </p>
                    <p className="tech">TECH STACK USED</p>
                    <p><FaReact color="#9d174d" size="30px"/>  <SiNetlify  color="#9d174d" size="30px"/><SiJavascript color="#9d174d" size="30px"/> <SiChakraui color="#9d174d" size="30px"/> </p>
                    <a href="https://sprightly-sable-b10d61.netlify.app/" ><button>Live</button></a>
                    <a href="https://github.com/Naquee/Decon-Chronical.git" ><button>Github</button></a>
                  
                   </div>
                </div>     


                

        </div>
        </div>
    )
    
}
export default Project