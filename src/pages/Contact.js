import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import '../styles/Contact.css';
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedinIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  return (
    <div className='contact'>
        <div className='aboutt'>
            <h2>Get in Touch</h2>
            <div className='promptt'>
            <p><PhoneIcon/>+201111343099</p>
            <p><WhatsAppIcon/>+201111343099</p>
            <p><EmailIcon/> h.e.momenfayez@gmail.com</p>
            <p className='mrg'><a href='https://github.com/moamen-Fayez'><GithubIcon/>Github</a></p>
            <p className='mrg'><a href='https://www.linkedin.com/in/moamen-fayez/'><LinkedinIcon/>LinkedIn</a></p>
            </div>
            
                      
        </div>
    </div>
  )
}

export default Contact