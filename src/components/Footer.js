import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../styles/Footer.css';

export default function Footer() {
  const linkedInProfileUrl = 'https://www.linkedin.com/in/mdmahbubshaun/';
  const gitHubProfileUrl = 'https://github.com/mahbubshaun';

  return (
    <div className='footer'>
        <div className='socialMedia'>
          
        <a href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer">
      <LinkedInIcon />
    </a>
       
    <a href={gitHubProfileUrl} target="_blank" rel="noopener noreferrer">
    <GitHubIcon />
    </a>
            

        </div>    
            <p>
                &copy; 2019-{new Date().getFullYear()} mahbubshaun.com
            </p>
    </div>
  )
}
