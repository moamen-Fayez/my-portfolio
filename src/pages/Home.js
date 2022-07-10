import React from 'react';
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import "../styles/Home.css"



function Home() {
  return (
    <div className='home'>
      <div className='about'>
        
        <h2>Hello, My Name is Moamen Fayez</h2>
        <div className='prompt'>
          <p> A Frontend developer with a passion for learning and creating</p>
            <a href='https://github.com/moamen-Fayez'><GithubIcon/></a> 
            <a href='https://www.linkedin.com/in/moamen-fayez/'><LinkedinIcon/></a>
            
            
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <span>React-JS, Next.js, Javascript, Redux, HTML, CSS, Typescript, Charts.js, Git, JSON,
                  AJAX, Bootstrap, Tailwind CSS, SASS, Syncfusion, Unit testing/Jest </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home