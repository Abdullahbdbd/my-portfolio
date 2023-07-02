import './Portfolio.css'
import img1 from '../../assets/man-shows-gesture-great-idea_10045-637.avif'

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

                    <h3>This is a portfolio item title</h3>
                       <div className="portfolio_item-cta">
                       <a href='http://github.com' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
                        
                        <a href='http://github.com' className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                       </div>
                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                       <img src={img1} alt="" />
                    </div>

                    <h3>This is a portfolio item title</h3>
                       <div className="portfolio_item-cta">
                       <a href='http://github.com' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
                        
                        <a href='http://github.com' className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                       </div>
                </article>
                
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                       <img src={img1} alt="" />
                    </div>

                    <h3>This is a portfolio item title</h3>
                       <div className="portfolio_item-cta">
                       <a href='http://github.com' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
                        
                        <a href='http://github.com' className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                       </div>
                </article>

               
            </div>
        </section>
    );
};

export default Portfolio;