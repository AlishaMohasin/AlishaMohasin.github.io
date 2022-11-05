import React,{useState} from 'react'
import "./style/Contact.scss"
// import './Styles/Contact.css'
import { FaHeart, FaPhoneSquareAlt } from 'react-icons/fa'
import { SiGmail,SiLinkedin,SiGithub } from 'react-icons/si'
import { MdLocationPin } from 'react-icons/md'
import "./style/Main.scss"
import { FaGithub,FaLinkedin } from 'react-icons/fa';

const Contact = () => {
 const [form, setForm] = useState({
            name:"",
          email: "",
          message: ""
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setForm({
              ...form,
              [name]: value
            });
          };


          // const handleSubmit = (e) => {
          //   e.preventDefault();
          //   console.log(form)
          // }
    return (
        <div className='contact' id="contact">
           
            {/* <div className="inputs"> */}
                <h1 >CONTACT ME</h1>
                {/* <div>
                 <form onSubmit={handleSubmit}>
                    <div>
                <input  type="text"  onChange={handleChange} name="name"   value={form.name} placeholder='Name'/>
                <input  type="email" onChange={handleChange}  name="email"   value={form.email}   placeholder='Email'/>
                <input  type="text"   onChange={handleChange}   name="message"  value={form.message}    placeholder='Message' className='message'/>
                <button type="submit" >SEND</button>
                </div>
                </form>
                </div> */}
            {/* </div> */}
         <div className='location'>
            <p><FaPhoneSquareAlt size={"26px"} className="loc" />8050957539</p>
            <p><SiGmail size={"26px"} className="loc" /> alishamohasin85@gmail.com</p>
          <p> <MdLocationPin size={"26px"} className="loc" />Kannur,Kerala</p>
          {/* <p> <a href="https://www.linkedin.com/in/alishamohasin/"><SiLinkedin size={"26px"}     className="loc"  /></a></p> 
          <p><a href="https://github.com/AlishaMohasin"><SiGithub size={"26px"} className="loc"/></a></p> */}
          
        </div>
        <div className="icons">
                 
                 
                 <a href="https://github.com/AlishaMohasin">
                  <i className="icon"><FaGithub size={"40px"} /></i>
                 </a>
                 <a href="https://www.linkedin.com/in/alishamohasin/">
                  <i className="icon"><FaLinkedin size={"40px"} /></i>
                 </a>

                 </div>


        <div className='heart'>Made with <FaHeart color={"#f43f5e "}/> by AlishaMohasin</div>
        </div>
    )
}

export default Contact