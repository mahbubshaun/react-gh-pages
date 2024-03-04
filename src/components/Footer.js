import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>

            <LinkedInIcon/>
            <GitHubIcon />

        </div>    
            <p>
                &copy; 2019-{new Date().getFullYear()} mahbubshaun.com
            </p>
    </div>
  )
}
