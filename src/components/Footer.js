import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href='https://github.com/moamen-Fayez'><GithubIcon/></a> 
            <a href='https://www.linkedin.com/in/moamen-fayez/'><LinkedinIcon/></a>
            
        </div>
        
        <p>&copy; 2022 Moamen Fayez</p>
    </div>
  )
}

export default Footer