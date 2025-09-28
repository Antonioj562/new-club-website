import '../styles/projects.css';

import broncoBondImg from "../assets/broncobond.png";
import broncoHacksSiteImg from "../assets/broncoHacks2025.png";
import broncoPortalImg from "../assets/broncoHacksApplicationPortal2025.png";
import mlVideo from "../assets/videos/ML-project.mov";
import projectsBanner from "../assets/11377175_10203435304518305_4965010383617393659_n.jpg";

export const Projects = () => {
    return (
        <section id='projects'>
        {/* Projects section */}
            <div className='projects-title-container'><h1 className='projects-title'>PROJECTS</h1></div>
            <div className='project-container'>
                <div className='project-title-container' id='second-project'>
                    <h2 className='project-title'>Bronco Bond</h2>
                    <div className='circle'></div>
                </div>
                <ul className='project-description'>
                    <li>
                        BroncoBond is a student networking app designed to help Cal Poly Pomona students 
                        uncover people, places, programs, and events associated with CPP. The app offers 
                        a solution to the difficulty students face in fully utilizing CPP’s resources. 
                        By offering a streamlined platform that consolidates campus resources into one 
                        easy-to-use app BroncoBond simplifies the process of connecting on campus.
                    </li>
                    <li>
                        Front-end Technologies: Flutter, Dart
                    </li>
                    <li>
                        Back-end Technologies: NodeJS, ExpressJS, MongoDB, SocketIO
                    </li>
                    <li>
                        Services: AWS EC2, Route53, VPC
                    </li>
                    <li>
                        Project Lead: <a href="https://www.linkedin.com/in/jaydenvinhnguyen/" target="_blank">Jayden Nguyen</a>
                    </li>
                    <li className='button-container'>
                        <a className='button app-demo' href='https://broncobond.com/' target='_blank'>Click Here to View the Website</a>
                    </li>
                </ul>
                <div className='project-media-container'>
                    <img src={broncoBondImg} alt='Bronco Bond Application' className='project-media' />
                    <p className='project-caption'>User Interface design for Bronco Bond</p>
                </div>
            </div>

            <div className='project-container'>
                <div className='project-title-container' id='second-project'>
                    <h2 className='project-title'>Bronco Hacks Website</h2>
                    <div className='circle'></div>
                </div>
                <ul className='project-description'>
                    <li>
                        Website for BroncoHacks Hackathon @ CPP! This website is used to display information about 
                        the upcoming hackathons @ California State Polytechnic University, Pomona as well 
                        as information about previous hackathons.
                    </li>
                    <li>
                        Tech Stack: JavaScript, HTML, Tailwind CSS, Figma, Git/GitHub
                    </li>
                    <li>
                        Project Leads: <a href="https://www.linkedin.com/in/christopher-j-lo?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADDC094BvO94gbKZ6Y3_-VOatXIz7hAjtJQ">Christopher Lo</a>, 
                        <a href="https://www.linkedin.com/in/justin-mn?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADsXKfYB8UWKPdPIM9Hf78TQqT5y1Xz_f2A&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BIcU78MuxRv2eJedQGPOf4Q%3D%3D">Justin Nguyen</a>, 
                        <a href="https://www.linkedin.com/in/danielpasion/">Daniel Pasion</a>, 
                        <a href="https://www.linkedin.com/in/michael-ml-wu?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEWZscMBfQ54IYozdR-EN4DipWAvwBOB0aw&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BL2%2FfU1tjSoOAjG%2F6hI7KEQ%3D%3D">Michael Wu</a>
                    </li>
                    <li className='button-container'>
                        <a className='button app-demo' href='https://www.broncohacks.org' target='_blank'>Click Here to View the Website</a>
                        <a className='button app-demo' href='https://github.com/BroncoHacks-Website/BroncoHacks-Website' target='_blank'>Click Here to View the GitHub Repository</a>
                    </li>
                </ul>
                <div className='project-media-container'>
                    <img src={broncoHacksSiteImg} alt='BroncoHacks Static Site' className='project-media' />
                    <p className='project-caption'>Home page for the BroncoHacks Website</p>
                </div>
            </div>

            <div className='project-container'>
                <div className='project-title-container' id='second-project'>
                    <h2 className='project-title'>Bronco Hacks Application Portal</h2>
                    <div className='circle'></div>
                </div>
                <ul className='project-description'>
                    <li>
                        Application Portal to sign up for our BroncoHacks Hackathon @ CPP! This website is used to create or join teams
                        for our Hackathons. This website also displays information of your current team members in order to
                        easily connect with them. This ensures for a smoother experience while hackers get prepared
                        for a fun 24 hours of non-stop coding!
                    </li>
                    <li>
                        Front-end Technologies: React TypeScript, Tailwind CSS, Figma, Git/GitHub
                    </li>
                    <li>
                        Back-end Technologies: NodeJS, Python Flask, Sqlite, 
                    </li>
                    <li>
                        Services: Vercel, Render, Mailgun, Squarespace
                    </li>
                    <li>
                        Project Lead: <a href="https://www.linkedin.com/in/danielpasion/" target="_blank">Daniel Pasion</a>
                    </li>
                    <li className='button-container'>
                        <a className='button app-demo' href='https://www.broncohacksportal.org/' target='_blank'>Click Here to View the Website</a>
                        <a className='button app-demo' href='https://github.com/BroncoHacks-Website/BroncoHacks-Portal' target='_blank'>Click Here to View the GitHub Repository</a>
                    </li>
                </ul>
                <div className='project-media-container'>
                    <img src={broncoPortalImg} alt='Bronco Bond Application' className='project-media'/>
                    <p className='project-caption'>Home Page for the BroncoHacks Application Portal</p>
                </div>
            </div>

            <div className='project-container'>
                <div className='project-title-container'>
                    <h2 className='project-title'>Exploring Machine Learning Models</h2>
                    <div className='circle'></div>
                </div>
                <ul className='project-description'>
                    <li>
                        We are a project team exploring various machine-learning algorithms. Our primary objective 
                        is to solve one problem: predicting an individual’s salary based on a set of variables. We 
                        will analyze, compare, and contrast the models to understand which one is the most effective. 
                        After thorough analysis, we have found that Linear Regression is the most optimal solution, 
                        offering greater accuracy and ease of use for programmers.
                    </li>
                    <li>
                        Project Lead: <a href="https://www.linkedin.com/in/michelle-reyes-5a9bb2246/" target="_blank">Michelle Reyes</a>
                    </li>
                    <li className='button-container'>
                        <a className='button app-demo' href='https://github.com/CSS-Exploring-Machine-Learning-Models/Machine_Learning_Algorithms.git' target='_blank'>Click Here to View the GitHub Repository</a>
                    </li>
                </ul>
                <div className='project-media-container'>
                    <video className='old-website-video' controls>
                        <source src={mlVideo} type='video/mp4'/>
                        Graphs and Results Produced by Machine Learning Models
                    </video>
                </div>
            </div>

            <div className='projects-banner-container'>
                <div className='projects-circle-border-container'>
                    <div className='project-border'></div>
                    <div className='circle'></div>
                </div>
                <div className='projects-circle-border-container' id='last'>
                    <div className='circle'></div>
                </div>
                <div className='decoration-circle-container'>
                    <div className='second-border-length'></div>
                    <div className='circle decoration-circle size-medium' id='circle-4'></div>
                    <div className='circle decoration-circle size-large' id='circle-1'></div>

                    <img className='projects-banner' src={projectsBanner} alt='Project Banner'/>
                    <div className='circle decoration-circle size-large' id='circle-1'></div>
                    <div className='circle decoration-circle size-medium' id='circle-4'></div>
                </div>
            </div>
            </section>
    )
}
