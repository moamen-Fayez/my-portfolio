import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import { useEffect } from 'react';

function Navbar() {

    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();
    useEffect(() => {setExpandNavbar(false)},[location])



  return (
    <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
        <div className='toggleButton'>
            <button onClick={() => {setExpandNavbar((prev) => !prev )}}><ReorderIcon/></button>
        </div>
        <div className='links'>
            <Link to='/' > Home </Link>            {/*onClick={() => {setExpandNavbar(false)}} */}
            <Link to='/projects'> Projects </Link>
            <Link to='/experience'> Experience </Link>
            <Link to='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar