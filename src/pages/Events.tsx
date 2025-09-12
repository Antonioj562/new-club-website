export const Events = () => {
    return (
        <div className="events-container">
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
            
        </div>
    )
}