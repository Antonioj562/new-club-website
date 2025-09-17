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
                    <li>
                        Frontend:
                        <a href="https://www.linkedin.com/in/jacob-lembach-a06166249/">Jacob Lembach</a>,
                        <a href="https://www.linkedin.com/in/allison-nguyen-/">Allison Nguyen</a>,
                        <a href="https://www.linkedin.com/in/rovenrivera/">Roven Rivera</a>,
                        <a href="https://www.linkedin.com/in/vivian-dtrieu/">Vivian Trieu</a>,
                        <a href="https://www.linkedin.com/in/natasha-wong-marie/">Natasha Wong</a>
                    </li>
                    <li>
                        Backend:
                        <a href="https://www.linkedin.com/in/jacpalonzo/">Jacob Alonzo</a>,
                        <a href="https://www.linkedin.com/in/phyu-lwin/">Kelly Lwin</a>,
                        <a href="https://www.linkedin.com/in/ryan-pham-0a1479268/">Ryan Pham</a>,
                        <a href="https://www.linkedin.com/in/bt7274/">Brandon Tseng</a>
                    </li>
                    <li>
                        UI/UX:
                        <a href="https://www.linkedin.com/in/tavina-chen/">Tavina Chen</a>,
                        <a href="https://www.linkedin.com/in/jenexe/">Jennifer Garcia</a>,
                        <a href="https://www.linkedin.com/in/stella-sinlao/">Stella Sinlao</a>,
                        <a href="https://www.linkedin.com/in/javi-wu-1056a12b6/">Javi Wu</a>
                    </li>
                    <li className='button-container'>
                        <a className='button app-demo' href='https://broncobond.com/' target='_blank'>Click Here to View the Website</a>
                    </li>
                </ul>
                <div className='project-media-container'>
                    <img src='images/broncobond.png' alt='Bronco Bond Application' className='project-media' />
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
                    <li>
                        Developers: 
                        <a href="https://www.linkedin.com/in/gerardosolisit/">Gerardo Solis</a>, 
                        <a href="https://www.linkedin.com/in/tommmyphao">Thomas Phao</a>, 
                        <a href="https://www.linkedin.com/in/jairuslegion/">Jairus Legion</a>, 
                        <a href="https://www.linkedin.com/in/rebecca-l-smith-3075604/">Rebecca Smith</a>, 
                        <a href="https://www.linkedin.com/in/ranedy">Rane Dy</a>, 
                        <a href="https://www.linkedin.com/in/arminerika">Armin Erika Polanco</a>,
                        <a href="https://www.linkedin.com/in/mmisaacs/">Maddie Issacs</a>
                    </li>
                    { /*<li>
                        Developers:
                        <ul className='project-members'>
                            <li>
                                Justin Nguyen
                            </li>
                            <li>
                                Christopher Lo
                            </li>
                            <li>
                                Daniel Pasion
                            </li>
                            <li>
                                Gerardo Solis
                            </li>
                            <li>
                                Thomas Phao
                            </li>
                            <li>
                                Jairus Legion
                            </li>
                            <li>
                                Rebecca Smith
                            </li>
                            <li>
                                Rane Dy
                            </li>
                            <li>
                                Armin Erika Polanco
                            </li>
                            <li>
                                Maddie Issacs
                            </li>
                        </ul>
                    </li> --> --- IGNORE - I think this was old future plans for alumni --- */}
                    <li className='button-container'>
                        <a className='button app-demo' href='https://www.broncohacks.org' target='_blank'>Click Here to View the Website</a>
                        <a className='button app-demo' href='https://github.com/BroncoHacks-Website/BroncoHacks-Website' target='_blank'>Click Here to View the GitHub Repository</a>
                    </li>
                </ul>
                <div className='project-media-container'>
                    <img src='images/broncoHacks2025.png' alt='BroncoHacks Static Site' className='project-media' />
                    <p className='project-caption'>Home page for the BroncoHacks Website</p>
                </div>
            </div>
            { /* <!-- <div className='project-container'> -->
                    <!-- Project title with two circle shapes on left and right end to insert between white
                line --> */}
                {/* <div className='project-title-container'> */}
                    {/* CSS Club's Mobile Application */}
                    {/* <h2 className='project-title'>CSS Club’s Mobile Application</h2>
                    <div className='circle'></div>
                </div>
                <ul className='project-description'>
                    <li>
                        Utilizing the Scrum Methodology, we have a group of 12 people, from new to
                        semi-experienced, led by 2 leaders. We divide each team into 2 separate groups,
                        front-end and back-end, to develop this application.
                    </li>
                    <li>
                        Front-end technologies used: React Native, Node.js, Javascript, Axios
                    </li>
                    <li>
                        Back-end technologies used: Flask, Postman, PostgreSQL, AWS EC3, RDS,
                        pgAdmin4, SQLAcademy, TravisCI, Pytest
                    </li>
                    <li>
                        Management Framework used: Google Drive, Trello, Github, Zoom, Discord
                    </li>
                    <li className='button-container'>
                        <a className='button app-demo' href='https://streamable.com/iztzf4' target='_blank'>Mobile Application Demo</a>
                    </li>
                </ul>
                <div className='project-media-container'>
                    <img src='images/csspiproject.gif' alt='CSSPI Project' className='project-media'>
                    <p className='project-caption'>Backend database for our club's mobile application</p>
                </div>
            </div>
            */}
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
                    <li>
                        Developers:
                        <a href="https://www.linkedin.com/in/nicholas-amancio/" target="_blank">Nicholas Amancio</a>, 
                        <a href="https://www.linkedin.com/in/caleb-k-chung-3774852a9/" target="_blank">Caleb Chung</a>, 
                        <a href="https://www.linkedin.com/in/cesarhenrydepaula" target="_blank">Cesar Henry dePaula</a>, 
                        <a href="https://www.linkedin.com/in/jade-nguyen-52a591239/" target="_blank">Jade Nguyen</a>, 
                        <a href="https://www.linkedin.com/in/tony-tong-699631240/" target="_blank">Tony Tong</a>, 
                        <a href="https://www.linkedin.com/in/justin-mn/" target="_blank">Justin Nguyen</a>, 
                        <a href="https://www.linkedin.com/in/thomasphao/" target="_blank">Tommy Phao</a>, 
                        <a href="https://www.linkedin.com/in/jaydenvinhnguyen/" target="_blank">Jayden Nguyen</a>
                    </li>
                    <li className='button-container'>
                        <a className='button app-demo' href='https://www.broncohacksportal.org/' target='_blank'>Click Here to View the Website</a>
                        <a className='button app-demo' href='https://github.com/BroncoHacks-Website/BroncoHacks-Portal' target='_blank'>Click Here to View the GitHub Repository</a>
                    </li>
                </ul>
                <div className='project-media-container'>
                    <img src='images/broncoHacksApplicationPortal2025.png' alt='Bronco Bond Application' className='project-media'/>
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
                    <li>
                        Members: Megan Bee, 
                        Michael Castillo, 
                        <a href="https://www.linkedin.com/in/britney-collier-1401602a7/" target="_blank">Britney Collier</a>, 
                        Bijou Raj,
                        <a href="https://www.linkedin.com/in/nicholas-hoang-7b1644235/" target="_blank">Nicholas Hoang</a>, 
                        Hanmo Zhang, 
                        <a href="https://www.linkedin.com/in/gabrielrobles/" target="_blank">Gabriel Robles</a>, 
                        Johnny Garcia
                    </li>
                    <li>
                        Python Libraries: Scikit-learn, TensorFlow, Seaborn, Matplotlib, Pandas, NumPy
                    </li>
                    <li>
                        Code Editors: Visual Studio Code, Jupyter Notebook
                    </li>
                    <li className='button-container'>
                        <a className='button app-demo' href='https://github.com/CSS-Exploring-Machine-Learning-Models/Machine_Learning_Algorithms.git' target='_blank'>Click Here to View the GitHub Repository</a>
                    </li>
                </ul>
                <div className='project-media-container'>
                    <video className='old-website-video' controls>
                        <source src='videos/ML-project.mov' type='video/mp4'/>
                        Graphs and Results Produced by Machine Learning Models
                    </video>
                </div>
            </div>
            {/* <div class='project-container'> */}
                {/* <div class='project-title-container' id='second-project'> */}
                    {/* CSS Website redesign */}
                    {/* <h2 class='project-title'>CSS Website Redesign</h2>
                    <div class='circle'></div>
                </div>
                <ul class='project-description'>
                    <li>
                        In this project, we redesigned the whole club website, handled by two talented persons, one UI/UX designer and the other web developer. This was an ongoing semester project which taught them the basic concepts of web design, version control with GitHub, and important aspects of website maintenance.
                    </li>
                    <li>
                        Front-end technologies used: HTML, CSS, Javascript, JQuery 
                    </li>
                    <li>
                        Web design technologies used: Adobe XD, SVG
                    </li>
                    <li>
                        Management Framework used : Google Drive, Github, Discord
                    </li>
                </ul>
                <div class='project-media-container'>
                    <video class='old-website-video' controls>
                        <source src='videos/oldwebsite.mp4' type='video/mp4'>
                    Your browser does not support the video tag.
                    </video>
                    <p class='project-caption'>Our club's website before the redesign</p>
                </div>
            </div> --> 
            <!-- <div class='project-container'> -->
                <!-- <div class='project-title-container' id='second-project'> -->
                    <!-- CS Class Google Calendar Scheduler Web Application -->
                    <!-- <h2 class='project-title'>CS Class Google Calendar Scheduler Web Application</h2>
                    <div class='circle'></div>
                </div>
                <ul class='project-description'>
                    <li>
                        This web application lets you choose from a list of all available computer science classes on campus to automatically add to your primary Google Calendar. You can also add
                        an optional zoom link and location to be added to your Google Calendar events for each class!
                    </li>
                    <li>
                        Front-end technologies used: HTML, CSS, Javascript, JQuery 
                    </li>
                    <li>
                        Web design technologies used: Adobe XD, SVG
                    </li>
                    <li>
                        Back-end technologies used: Node.js, ExpressJS, EJS
                    </li>
                    <li>
                        Management Framework used : Google Drive, Github, Discord
                    </li>
                </ul>
                <div class='project-media-container'>
                    <video class='old-website-video' controls>
                        <source src='videos/cs-class-scheduler-demo.mov' type='video/mp4'>
                    Your browser does not support the video tag.
                    </video>
                    <p class='project-caption'>A demo of the web application in use</p>
                </div>
            </div> -->*/}
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


                    <img className='projects-banner' src='images/11377175_10203435304518305_4965010383617393659_n.jpg' alt='Project Banner'/>
                </div>
            </div>
            </section>
    )
}
