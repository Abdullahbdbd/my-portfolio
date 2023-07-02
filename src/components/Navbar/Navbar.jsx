import { useState } from 'react';
import './Navbar.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineProject} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'

const Navbar = () => {
const [activeNav, setActiveNav] = useState('#')

    return (
        <nav>
            <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome></AiOutlineHome></a>

            <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser></AiOutlineUser></a>

            <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook></BiBook></a>

            <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineProject></AiOutlineProject></a>

            <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail></BiMessageSquareDetail></a>
        </nav>
    );
};

export default Navbar;