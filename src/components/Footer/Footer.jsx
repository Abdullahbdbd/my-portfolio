import './Footer.css'
import {BsFacebook, BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer_logo'>ABDULLAH</a>

            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className="footer_socials">
                <a href='https://facebook.com'><BsFacebook></BsFacebook></a>
                <a href='https://instagram.com'><BsInstagram></BsInstagram></a>
                <a href='https://twitter.com'><FiTwitter></FiTwitter></a>
            </div>

            <div className="footer_copyright">
                <small>
                    &copy; ABDULLAH tutorials. All right reserved.
                </small>
            </div>
        </footer>
    );
};

export default Footer;