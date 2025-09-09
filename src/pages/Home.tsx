import '../styles/home.css'

export const Home = () => {
    return (
        <>
            {/* Home page */}
            <header id='top'>
                <img src={'/src/assets/aerial-ssb 1.png'} alt='CPP Engineering Building' className='header-image' />
                <img src={'/src/assets/logo_for_web_2_2025.png'} alt='logo' className='desktop-logo' />
            </header>
            {/* About section first page */}
            <section id='about'>
                <h1 className='about-title'><span className='about-title-text'>Did you know</span><span className='about-question-mark'>?</span></h1>
                <div className='about-blue-line'></div>
                    <img src={'/src/assets/cssgif.gif'} alt='computer with typing text animation gif' className='about-computer' />
                <div className='about-desc-wrapper'>
                <p className='about-desc'>Computer Science Society is the oldest computer science organization at Cal Poly Pomona. We are one of the largest clubs that host events regularly and advise our members on the next path to success. Our motto is “Connect passion to empathy“.</p>
                </div>
            </section>
            {/* Mission section */}
            <section id='mission'>
                <div className='mission-title-container'>
                <h1 className='mission-title'>OUR MISSION</h1>
                </div>
                <div className='card-container'>
                <div className='card-column' id='mission-card-column-1'>
                    <div className='mission-card'>
                    <h4 className='mission-card-title'>Connectivity</h4>
                    <p className='mission-card-description'>Connectivity, both socially and technically, is something in which our club focuses on as we prioritize providing our members with the opportunity to connect and build networks with professionals and peers. These connections allow them to reach new heights, and technology aids our club with connecting to the world, allowing members to enhance their knowledge and experience. We aim to unite our students and create an inclusive environment where they will strive the most.</p>
                    <img src={'/src/assets/globe.svg'} alt='globe' className='mission-card-image first-mission-card-image' />
                    </div>
                </div>
                <div className='card-column' id='mission-card-column-2'>
                    <div className='mission-card'>
                    <h4 className='mission-card-title'>Development</h4>
                    <p className='mission-card-description'>Continuous technological advancement is a crucial driving force for society. During this tech storm, the improvement of resources and tools is always a goal in the industry. We aim to spread knowledge on this development through many of our activities. Whether they are technical or social development activities, we believe that the tools we provide will enhance one’s knowledge in both their technical and non-technical skills and ultimately guiding them to become a better person, one day at a time.</p>
                    <img src={'/src/assets/upchart.svg'} alt='upward trend' className='mission-card-image' />
                    </div>
                </div>
                <div className='card-column' id='mission-card-column-3'>
                    <div className='mission-card'>
                    <h4 className='mission-card-title'>Innovation</h4>
                    <p className='mission-card-description'>As the world is actively evolving, we need to prepare for these changes and adapt to them as fast as we can. The key for innovation lies in the hands of future generations pursuing a role in the tech industry and how keen they are in detecting, analyzing, and solving global problems. To prepare for a vastly improving and innovating industry, our club promotes life-long active learning to build robust and timeless skill sets. Therefore, we strive to emphasize how significant and inventive new tech solutions are to society.</p>
                    <img src={'/src/assets/brain.svg'} alt='Innovative Thinking' className='mission-card-image' />
                    </div>
                </div>
                </div>
            </section>
            
            {/* Events section */}
            <section id='events'>
                <div className='events-mobile-background events-mobile-background-inactive'></div>
                <div className='events-title-container'>
                <h1 className='events-title'>EVENTS</h1>
                </div>
                <p className='events-semester'>Semester: Fall 2020</p>
                {/* ...existing code for events... */}
                {/* Main desktop grid */}
                <div className='events-grid'>
                <div className='events-title-container'>
                    <h1 className='events-title'>EVENTS</h1>
                </div>
                {/* ...existing code for event items... */}
                <div className='events-grid-spacer'></div>
                <div className='events-right-line'></div>
                </div>
        <img src={'/src/assets/old.jpg'} alt='' className='events-picture' id='events-picture-1' />
        <img src={'/src/assets/icpc.jpg'} alt='' className='events-picture' id='events-picture-2' />
            </section>
            {/* Projects section */}
            <section id='projects'>
                <div className='projects-title-container'><h1 className='projects-title'>PROJECTS</h1></div>
                {/* ...existing code for projects... */}
                <div className='projects-banner-container'>
                <div className='projects-circle-border-container'>
                    <div className='project-border'></div>
                    <div className='circle'></div>
                </div>
                <div className='projects-circle-border-container' id='last'>
                    <div className='project-border'></div>
                    <div className='circle'></div>
                </div>
                <div className='decoration-circle-container'>
                    <div className='second-border-width'></div>
                    <div className='second-border-length'></div>
                    <div className='circle decoration-circle size-large' id='circle-1'></div>
                    <div className='circle decoration-circle' id='circle-2'></div>
                    <div className='circle decoration-circle size-medium' id='circle-3'></div>
                    <div className='circle decoration-circle size-medium' id='circle-4'></div>
                    <div className='circle decoration-circle size-small' id='circle-5'></div>
                    <div className='circle decoration-circle size-small' id='circle-6'></div>
                    <img className='projects-banner' src={'/src/assets/11377175_10203435304518305_4965010383617393659_n.jpg'} alt='Project Banner' />
                </div>
                </div>
            </section>
            {/* Footer */}
            <footer id='contact-us'>
                <div className='footer-container'>
                <div className='logo-stuff'>
                    <img className='comp-sci-logo' src={'/src/assets/logo_for_web_2_2025.png'} alt='' />
                </div>
                <div className='social-stuff'>
                    <div className='email-container'>
                    <ul>
                        <li>REACH US AT OUR EMAIL</li>
                        <li>css.cpp.edu@gmail.com</li>
                    </ul>
                    </div>
                    <div className='css-socials'>
                    <ul>
                        <li>STAY IN THE LOOP</li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    </div>
                    <div className='footer-nav-links'>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    </div>
                </div>
                <a href='#top' className='top-button smoothScroll'>top</a>
                </div>
                <div className='decoration-circle-container'>
                <div className='circle decoration-circle size-medium' id='footer-circle-1'></div>
                <div className='circle decoration-circle size-medium' id='footer-circle-2'></div>
                <div className='circle decoration-circle size-medium' id='footer-circle-3'></div>
                <div className='circle decoration-circle size-small' id='footer-circle-4'></div>
                <div className='circle decoration-circle size-small' id='footer-circle-5'></div>
                <div className='circle decoration-circle size-small' id='footer-circle-6'></div>
                </div>
            </footer>
            </>
        )
}