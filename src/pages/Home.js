import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon  from '@material-ui/icons/Email';
import '../styles/Home.css'
export default function Home() {
    const linkedInProfileUrl = 'https://www.linkedin.com/in/mdmahbubshaun/';
  const gitHubProfileUrl = 'https://github.com/mahbubshaun';
  const emailAddress = 'mdmahbubshaun@gmail.com';
  return (
    <div className='home'>
        <div className='about'>
            <h2>
                Hi, My Name is Shaun
            </h2>
            <div className='prompt'>
                <p>
                    A software engineer with a passion for learning & creating.
                </p>

                <a href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer">
      <LinkedInIcon />
    </a>
       
    <a href={gitHubProfileUrl} target="_blank" rel="noopener noreferrer">
    <GitHubIcon />
    </a>
    <a href={`mailto:${emailAddress}`}>
      <EmailIcon />
    </a>

            </div>

        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>
                        Robotic Process Automation Developer
                    </h2>
                    <span>
                    Programming Languages (Java, Python),Process Analysis and Automation,Solution Design and Architecture,Database Integration,API Integration,Advanced RPA Tool Proficiency(Robocorp),Problem-Solving Skills,Git and Version Control,Leadership Abilities
                    </span>
                </li>
                <li className='item'>
                    <h2>
                        Software Development Engineer in Test
                    </h2>
                    <span>
                    Programming Languages (Python, JavaScript), Test Automation Frameworks(Selenium WebDriver, Appium, PyTest), API Test Automation & RPA, Test Design and Planning,Test Execution and Reporting,Continuous Integration/Continuous Deployment (CI/CD),Code Quality and Static Analysis,Agile Methodologies,Collaboration and Communication,Problem-Solving Skills
                    </span>
                </li>
                <li className='item'>
                    <h2>
                        Aspiring Full Stack Software Engineer
                    </h2>
                    <span>
                    Frontend Development with React, Mobile App Development with React Native, Backend Development with Spring Framework, RESTful API Design and Implementation,Database Management (SQL and/or NoSQL),State Management Libraries (Redux, MobX),UI/UX Design Principles,Git and Version Control
                    </span>
                </li>
            </ol>

        </div>
    
    </div>
  )
}
