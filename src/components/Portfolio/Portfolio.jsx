import './Portfolio.css'
import img1 from '../../assets/10.png'
import img2 from '../../assets/11.png'
import img3 from '../../assets/12.png'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className="container portfolio_container">
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={img1} alt="" />
                    </div>


                        <h3>This website is about Chefs of Bangladesh. There is a Navber and a header. Below this is a section where everything in the chefs is provided Below that is a latest food section Below are the customer reviews Finally there is a footer This website has a blog section. Out of which 4 questions are answered There is a login section And there is a registration section There is also much more on this website...</h3>
                        <div className="portfolio_item-cta">
                            <a href='https://github.com/Abdullahbdbd/chef-client' className='btn' target='_blank' rel="noopener noreferrer">Github</a>

                            <a href='https://the-chef-recipe-hunter-client.web.app/' className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                        </div>
                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={img2} alt="" />
                    </div>

                    <h3>This project of mine is firstly a Navbar. This Navbar has a home route. First there is a banner section. After that is the gallery section. Right after that is the category tabs section. And below that there are two separate sections and lastly there is the footer section. There is another route besides Navbar called All Toys. All toys are shown in All Toy router. Another section within Route is the blog...</h3>
                    <div className="portfolio_item-cta">
                        <a href='https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-Abdullahbdbd' className='btn' target='_blank' rel="noopener noreferrer">Github</a>

                        <a href='https://toy-land-baebc.web.app/' className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                    </div>
                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={img3} alt="" />
                    </div>

                    <h3>I made a website about Islamic schools First comes the home page Then there is the instructor route Then that ache classes route Login and signup settings on this web site There are 3 roles in this website: User, Instructor and Admin There is a user dashboard, Which is called select item, Through which user can select class and make payment And there are two sections of Instructor route...</h3>
                    <div className="portfolio_item-cta">
                        <a href='https://github.com/Abdullahbdbd/summer-camp-client' className='btn' target='_blank' rel="noopener noreferrer">Github</a>

                        <a href='https://summer-camp-school-clien-3a05a.web.app/' className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                    </div>
                </article>


            </div>
        </section>
    );
};

export default Portfolio;