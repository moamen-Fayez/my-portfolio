import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../mylist/ProjectList';
import '../styles/ProjectDisplay.css';
import GitHub from '@mui/icons-material/GitHub';


const PrijectDisplay = () => {

    const { id } = useParams();
    const pproject = ProjectList[id]

  return (
    <div className='project'>
      <h1>{pproject.name}</h1>
      <a href={pproject.eurl}><img src={pproject.image}/></a>
      <button><a href={pproject.eurl}><p>Visit The Website</p></a></button>
      
      <h4><b/>{pproject.sk}</h4>
    </div>
  )
}

export default PrijectDisplay;