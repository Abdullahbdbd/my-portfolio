import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className="header_socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin></BsLinkedin></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><BsGithub></BsGithub></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><BsFacebook></BsFacebook></a>
        </div>
    );
};

export default HeaderSocials;
