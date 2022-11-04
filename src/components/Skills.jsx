import {skill} from "./utils/skill"
import {tool} from "./utils/skill"
// import './Styles/Skills.css'
import "./style/Skills.scss"
import Marquee from "react-fast-marquee"

const Skills=()=>{

return(
    <div className="box1" id="skill">
    <h2 className="kill">SKILLS</h2>
    <h3>FrontEnd/Backend</h3>
    <div className="box3" >
      
         <Marquee 
         gradient={false} 
         speed={80} 
         pauseOnHover={true}
         pauseOnClick={true} 
         delay={0}
         play={true} 
         direction="left"
          > 
        {skill.map((item)=>(
            <div className="box2">
                <img src={item.src} width="80px" alt="logo"/>
                <h3 className="label">{item.label}</h3>
                </div>

        ))}
        </Marquee>
        </div>
 {/* <div className=""> */}
    <h3 className="tools">Tool/CSS Library</h3>
    <div className="box3">
        <Marquee 
         gradient={false} 
         speed={80} 
         pauseOnHover={true}
         pauseOnClick={true} 
         delay={0}
         play={true} 
         direction="left"
          >
        {tool.map((item)=>(
            <div className="box2">
                <img src={item.src} width="80px" alt="logo"/>
                <h3 className="label">{item.label}</h3>
                </div>

        ))}
        </Marquee>
        </div>
        {/* </div> */}
   
    </div>
)

}
export default Skills