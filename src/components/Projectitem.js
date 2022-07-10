import React from 'react';
import '../styles/Projects.css';
import { useNavigate } from 'react-router-dom';

const Projectitem = ({ name, image, id }) => {
  const navigate = useNavigate()
  return (
    <div className='projectItem' onClick={() => {navigate('/project/' + id)}}>
        <div style={{ backgroundImage: `url(${image})`}} className='bgImage' />
        <h1>{name}</h1>
    </div>
  )
}

export default Projectitem