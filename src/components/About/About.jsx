import './About.css'
import ME from '../../assets/man-shows-gesture-great-idea_10045-637.avif'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineFolderOpen } from 'react-icons/ai'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className='about_card'>
                            <FaAward className='about_icon'></FaAward>
                            <h5>Experience</h5>
                            <small>6+ Month Working</small>
                        </article>

                        <article className='about_card'>
                            <FiUsers className='about_icon'></FiUsers>
                            <h5>Clients</h5>
                            <small>5+ BD</small>
                        </article>

                        <article className='about_card'>
                            <AiOutlineFolderOpen className='about_icon'></AiOutlineFolderOpen>
                            <h5>Projects</h5>
                            <small>30+ Completed</small>
                        </article>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis soluta ab, sit recusandae dolores voluptate quidem mollitia magnam nesciunt sequi eos asperiores expedita odit blanditiis.</p>
                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;