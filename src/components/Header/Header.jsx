import './Header.css'
import CTA from './CTA'
import ME from '../../assets/Picsart_23-07-01_21-29-24-043.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
           <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Abdullah</h1>
            <h5 className="text-light">Junior Web Developer</h5>
            <CTA></CTA>
            <HeaderSocials></HeaderSocials>

            <div className="me">
                <img src={ME} alt="me" />
            </div>

            <a href='#contact' className='scroll_down'>Scroll Down</a>
           </div>
        </header>
    );
};

export default Header;