import '../styles/e-board.css'

export const EBoard = () => {
    return (
        <div className="board-container">
            {/* E-Board section */}
            <section id='e-board'>
                <h1 className='mobile-e-board-title'>MEET OUR E-BOARD</h1>
                <div className='e-board-section-container'>
                <h1 className='desktop-e-board-title'>MEET OUR E-BOARD</h1>
                <div className='e-board-description-container'>
                    <div className='e-board-description-carousel'>
                    {/* Only active bios shown for brevity. Add more as needed. */}
                    <div className='e-board-description e-board-description-active'>
                        <h2 className='officer-title'>President</h2>
                        <p id='Jayden'>Hey everyone! I’m Jayden, a third-year Computer Science major. I’m passionate about becoming a full-stack developer because I love the process of creating complete applications from start to finish. Right now, I’m working on an exciting project called BroncoBond, a social media app designed to help guide students during their time at CPP. I’ll be leading CSS as president, and I’m really looking forward to meeting all of you at our socials!</p>
                    </div>
                    <div className='e-board-description e-board-description-inactive'>
                        <h2 className='officer-title'>Vice President</h2>
                        <p id='michael'>Hi! I'm Michael, a 3rd year here at CPP, majoring in CS. Although my interest lies mainly in software engineering, I’m currently working full-time as a software QA engineer. In my free time, I enjoy traveling, gaming, and playing bass (I’m not good lmao). If you ever see me on campus, feel free to say hi!</p>
                    </div>
                    <div className='e-board-description e-board-description-inactive'>
                        <h2 className='officer-title'>Secretary</h2>
                        <p id='brandon'>Hallo, I am Brandon, serving as your secretary! I am a 3rd year CS major interested in software/web development. Outside of CS, I enjoy taiko drumming, community work, and grinding The Finals. I also am a big fan of J-Rock, so please slide me recommendations! :D</p>
                    </div>
                    <div className='e-board-description e-board-description-inactive'>
                        <h2 className='officer-title'>Treasurer</h2>
                        <p id='Jade'>What’s up everyone! I’m Jade and I’ll be your treasurer for this term. I’m a 4th year CS major interested in web/game development. Some things I enjoy are crocheting, pokemon tcg, and coca-cola. I look forward to meeting you all!</p>
                    </div>
                    <div className='e-board-description e-board-description-inactive'>
                        <h2 className='officer-title'>Historian</h2>
                        <p id='julian'></p>
                    </div>
                    <div className='e-board-description e-board-description-inactive'>
                        <h2 className='officer-title'>Mentorship Chair</h2>
                        <p id='allison'></p>
                    </div>
                    <div className='e-board-description e-board-description-inactive'>
                        <h2 className='officer-title'>Project Chair</h2>
                        <p id='caleb'></p>
                    </div>
                    <div className='e-board-description e-board-description-inactive'>
                        <h2 className='officer-title'>Events and Outreach Chair</h2>
                        <p id='tony'></p>
                    </div>
                    <div className='e-board-description e-board-description-inactive'>
                        <h2 className='officer-title'>Webmaster</h2>
                        <p id='antonio'></p>
                    </div>
                    </div>
                </div>
                </div>
                {/* IMAGES */}
                <div className='e-board-gallery-container'>
                <div className='e-board-gallery'>
                    <img src={'/src/assets/jayden.jpg'} alt='Jayden' className='e-board-picture e-board-picture-active' />
                    <img src={'/src/assets/michael.jpg'} alt='Michael' className='e-board-picture e-board-picture-inactive' />
                    <img src={'/src/assets/Brandon.png'} alt='Brandon' className='e-board-picture e-board-picture-inactive' />
                    <img src={'/src/assets/Jade.jpeg'} alt='Jade' className='e-board-picture e-board-picture-inactive' />
                    <img src={'/src/assets/Julian.jpg'} alt='Julian' className='e-board-picture e-board-picture-inactive' />
                    <img src={'/src/assets/Allison.JPG'} alt='Allison' className='e-board-picture e-board-picture-inactive' />
                    <img src={'/src/assets/caleb.JPG'} alt='Caleb' className='e-board-picture e-board-picture-inactive' />
                    <img src={'/src/assets/tony.png'} alt='Tony' className='e-board-picture e-board-picture-inactive' />
                    <img src={'/src/assets/Antonio.jpeg'} alt='Antonio' className='e-board-picture e-board-picture-inactive' />
                </div>
                <div className='e-board-gallery-controls-container'>
                    <div className='e-board-gallery-button' id='e-board-gallery-left-button'>
                    <img className='e-board-gallery-controls' src={'/src/assets/left arrow.svg'} alt='left arrow' />
                    </div>
                    <div className='e-board-gallery-button' id='e-board-gallery-right-button'>
                    <img className='e-board-gallery-controls' src={'/src/assets/right arrow.svg'} alt='right arrow' />
                    </div>
                </div>
                <p className='e-board-gallery-counter'>1 / 9</p>
                </div>
            </section>
        </div>
    );
};