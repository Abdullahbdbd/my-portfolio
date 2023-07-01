import './Navbar.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineProject} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'

const Navbar = () => {
    return (
        <nav>
            <a href="#"><AiOutlineHome></AiOutlineHome></a>
            <a href="#about"><AiOutlineUser></AiOutlineUser></a>
            <a href="#experience"><BiBook></BiBook></a>
            <a href="#portfolio"><AiOutlineProject></AiOutlineProject></a>
            <a href="#contact"><BiMessageSquareDetail></BiMessageSquareDetail></a>
        </nav>
    );
};

export default Navbar;