export const Projects = () => {
    return (
        <div className="projects-container">
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
        </div>
    )
}
