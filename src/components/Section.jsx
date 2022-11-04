import React from 'react'
// import './Styles/Section.css'
import "./style/Section.scss"


const Section = () => {
    return (
        <div className='section' id="aboutme">


            <div className="section__container">


                {/* <div className="section__img">
                    <img src={"https://media.istockphoto.com/vectors/computer-programmeing-vector-concept-metaphor-vector-id1257967158?k=20&m=1257967158&s=612x612&w=0&h=xQZ3EIhSfI7WhuVCCqcsOSLP-vCuWp7hxat00PIwUMA="} alt="" />
                </div> */}


                <div className="section__content">
                    <h1>About Me</h1>
                   
                    <p>An Motivated and hardworking individual, Ready to apply my knowledge 
                        into practice, I have a diverse sets of skills,who is ready to take challenging 
                        and critical phase to Accomplish the goals</p>
                    <p>1200+ Hours of coding</p>
                    <p>200+ Git commits</p>
                    <p>6 Projects done</p>
                    <p>300+ Hours on Problem-Solving</p>
                   
                    <p>After months of rigorous training here I am looking for an opportunity as a full-stack developer</p>
                </div>



            </div>


        </div>
    )
}

export default Section