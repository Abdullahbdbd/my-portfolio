import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/abdullah-mohammad-a33949278/" target="_blank" rel="noopener noreferrer"><BsLinkedin></BsLinkedin></a>
            <a href="https://github.com/Abdullahbdbd" target="_blank" rel="noopener noreferrer"><BsGithub></BsGithub></a>
            <a href="https://www.facebook.com/profile.php?id=100040441380527" target="_blank" rel="noopener noreferrer"><BsFacebook></BsFacebook></a>
        </div>
    );
};

export default HeaderSocials;
