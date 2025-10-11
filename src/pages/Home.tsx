import { useEffect, useRef } from "react";

import '../styles/home.css'

import aerialSsb from "../assets/aerial-ssb 1.png";
import logo2025 from "../assets/logo_for_web_2_2025.png";
import cssGif from "../assets/cssgif.gif";
import globeSvg from "../assets/globe.svg";
import upchartSvg from "../assets/upchart.svg";
import brainSvg from "../assets/brain.svg";

export const Home = () => {
    const imageRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible"); 
            }
            });
        },
        { threshold: 0.2 } // triggers when 20% of the image is visible
        );

        if (imageRef.current) {
        observer.observe(imageRef.current);
        }

        return () => {
        if (imageRef.current) {
            observer.unobserve(imageRef.current);
        }
        };
    }, []);
    return (
        <>
            {/* Home page */}
            <header id='top'>
                <img src={aerialSsb} alt='CPP Engineering Building' className='header-image' />
                <img src={logo2025} alt='logo' className='desktop-logo' />
            </header>
            {/* About section first page */}
            <section id='about'>
                <h1 className='about-title'><span className='about-title-text'>Did you know</span><span className='about-question-mark'>?</span></h1>
                <div className='about-blue-line'></div>
                <img ref={imageRef} src={cssGif} alt='computer with typing text animation gif' className='about-computer' />
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
                            <img src={globeSvg} alt='globe' className='mission-card-image first-mission-card-image' />
                        </div>
                    </div>
                    <div className='card-column' id='mission-card-column-2'>
                        <div className='mission-card'>
                            <h4 className='mission-card-title'>Development</h4>
                            <p className='mission-card-description'>Continuous technological advancement is a crucial driving force for society. During this tech storm, the improvement of resources and tools is always a goal in the industry. We aim to spread knowledge on this development through many of our activities. Whether they are technical or social development activities, we believe that the tools we provide will enhance one’s knowledge in both their technical and non-technical skills and ultimately guiding them to become a better person, one day at a time.</p>
                            <img src={upchartSvg} alt='upward trend' className='mission-card-image' />
                        </div>
                    </div>
                    <div className='card-column' id='mission-card-column-3'>
                        <div className='mission-card'>
                            <h4 className='mission-card-title'>Innovation</h4>
                            <p className='mission-card-description'>As the world is actively evolving, we need to prepare for these changes and adapt to them as fast as we can. The key for innovation lies in the hands of future generations pursuing a role in the tech industry and how keen they are in detecting, analyzing, and solving global problems. To prepare for a vastly improving and innovating industry, our club promotes life-long active learning to build robust and timeless skill sets. Therefore, we strive to emphasize how significant and inventive new tech solutions are to society.</p>
                            <img src={brainSvg} alt='Innovative Thinking' className='mission-card-image' />
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}