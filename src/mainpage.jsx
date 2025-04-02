import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './Mainpage.css';
import profile from './profile.png';
import './background.css';


import {SiReact, SiDocker, SiKubernetes, SiPython, SiCss3, SiHtml5, SiLinux,
  SiMongodb, SiMysql, SiGit, SiJavascript, SiPhp, SiGithub, SiLinkedin, SiGmail,
   SiKotlin, SiRstudioide, SiJenkins,SiTailwindcss,SiNodedotjs,SiExpress} from 'react-icons/si';
import Projects from './projects';
import { ABOUT_TEXT, EDUCATION } from './constants';



export default function MainPage() {
  const [text] = useTypewriter({
    words: ['SUHANSA KASHMIRA'],
    loop: 0,
    delaySpeed: 3000,
  });

  return (
    <div>
     

      {/* Hero Section */}
      <div className="section">
        <h1>
        <span>{text}<Cursor /> </span>
         
          <br />
         
          
        </h1>
        <div className="profile">
          <img src={profile} alt="Suhansa Kashmira" />
        </div>
      </div>

      {/* Social Media Section */}
      <div className="section">
        <h2>Connect with Me</h2>
        
        <div className="social">
          <div>
            <a href="https://github.com/Suhansa-code" target="_blank" rel="noopener noreferrer">
              <SiGithub size={50} title="GitHub" />
            </a>
            <span>GitHub</span>
          </div>
          <div>
            <a href="https://linkedin.com/in/suhansa-kashmira-998a942b6" target="_blank" rel="noopener noreferrer">
              <SiLinkedin size={50} title="LinkedIn" />
            </a>
            <span>LinkedIn</span>
          </div>
          <div>
            <a href="mailto:suhansa2816@gmail.com">
              <SiGmail size={50} title="Gmail" />
            </a>
            <span>Gmail</span>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="about-me">
        <h2>About Me</h2>
        <p>
       {ABOUT_TEXT}
        </p>
      </div>

      {/* Skills Section */}
      
        <h2>Skills</h2>
        <div className="icon-skills">
          <div className="box"><SiHtml5 title="HTML" size={50} color="#E34F26" /></div>
          <div className="box"><SiCss3 title="CSS" size={50} color="#1572B6" /></div>
          <div className="box"><SiJavascript title="JavaScript" size={50} color="#F7DF1E" /></div>
          <div className="box"><SiPhp title="PHP" size={50} color="#777BB4" /></div>
          <div className='box'><SiTailwindcss title='Tailwindcss' size={50} color="white" /></div>


          <div className="box"><SiMongodb title="MongoDB" size={50} color="#47A248" /></div>
          <div className="box"><SiExpress title="ExpressJS" size={50} color="#61DBFB" /></div>
          <div className="box"><SiReact title="ReactJS" size={50} color="#61DBFB" /></div>
          <div className="box"><SiNodedotjs title="NodeJS" size={50} color="#61DBFB" /></div>
          
          <div className="box"><SiPython title="Python" size={50} color="#306998" /></div>
          <div className="box"><SiLinux title="Linux" size={50} color="#FCC624" /></div>
          
          <div className="box"><SiMysql title="MySQL" size={50} color="#4479A1" /></div>
          <div className="box"><SiGit title="Git" size={50} color="#F05032" /></div>
          <div className="box"><SiKotlin title='Kotlin' size={50} color="#0095D5" /></div>
          <div className="box"><SiRstudioide title='R studio' size={50} color="#276DC3" /></div>
          <div className="box"><SiGithub title='GitHub' size={50} color="white" /></div>
          <div className="box"><SiDocker title="Docker" size={50} color="#2496ED" /></div>
          <div className="box"><SiKubernetes title="Kubernetes" size={50} color="#326CE5" /></div>
          <div className='box'><SiJenkins title='Jenkins' size={50} color="#D24939" /></div>
          
        </div>  

             <Projects />
      

    
  </div>

  
 


          
  );
}
