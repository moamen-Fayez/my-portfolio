import React from 'react';
import Projectitem from '../components/Projectitem';
import {  ProjectList } from '../mylist/ProjectList';



function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
       {ProjectList.map((proj, indx) => { 
        return <Projectitem image={proj.image} name={proj.name} key={proj.name} id={indx}/> } )}
      </div>
    </div>
  )
}

export default Projects