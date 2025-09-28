import "../styles/events.css";
import { useState } from "react";

export const Events = () => {
    const [active, setActive] = useState("BroncoHacks");

    return (
        <div className="events-container">
            <section className="events-section">
                <div className="events-grid">
                    {/* Left: list */}
                    <div className="events-list">
                        <p className={`events-item ${active === "BroncoHacks" ? "active" : ""}`} onClick={() => setActive("BroncoHacks")}>
                            BroncoHacks Hackathon
                        </p>
                        <p className={`events-item ${active === "CSSPI" ? "active" : ""}`} onClick={() => setActive("CSSPI")}>
                            CSSPI
                        </p>
                        <p className={`events-item ${active === "WebDesign" ? "active" : ""}`} onClick={() => setActive("WebDesign")}>
                            Web Design
                        </p>
                        <p className={`events-item ${active === "RecruiterEvents" ? "active" : ""}`} onClick={() => setActive("RecruiterEvents")}>
                            Recruiter Events
                        </p>
                        <p className={`events-item ${active === "SpeakerEvents" ? "active" : ""}`} onClick={() => setActive("SpeakerEvents")}>
                            Guest Speakers
                        </p>
                        <p className={`events-item ${active === "Workshops" ? "active" : ""}`} onClick={() => setActive("Workshops")}>
                            Workshops
                        </p>
                    </div>

                    {/* Right: description */}
                    <div className="events-detail">
                        {active === "BroncoHacks" && (
                            <>
                                <h2 className="events-detail-title">BroncoHacks Hackathon</h2>
                                <p className="events-detail-desc">
                                    BroncoHacks is a student-led organization bringing hackathon culture to CPP. We host MiniHack in Fall and BroncoHacks in Spring!
                                </p>
                            </>
                        )}

                        {active === "CSSPI" && (
                            <>
                                <h2 className="events-detail-title">Computer Science Society Project Initiative (CSSPI)</h2>
                                <p className="events-detail-desc">
                                    This series of events helps students apply useful skills learned outside of classes to solve real problems. Whether in education, the environment, or personal projects,
                                    this initiative represents learning by doing.
                                </p>
                            </>
                        )}

                        {active === "WebDesign" && (
                            <>
                                <h2 className="events-detail-title">Web Design</h2>
                                <p className="events-detail-desc">
                                    Learn how to design and build websites, contribute to club projects, and showcase your work in our projects showcase. We cover both design and implementation topics.
                                </p>
                            </>
                        )}

                        {active === "SpeakerEvents" && (
                            <>
                                <h2 className="events-detail-title">Speaker Events</h2>
                                <p className="events-detail-desc">
                                    Hear from professionals about life as a Software Engineer, Product Manager, Data Scientist, and more. Speakers share experience, routines, and career advice for students.
                                </p>
                            </>
                        )}

                        {active === "RecruiterEvents" && (
                            <>
                                <h2 className="events-detail-title">Recruiter Events</h2>
                                <p className="events-detail-desc">
                                    Opportunities to connect with recruiters to learn about company culture and ask questions — helpful for internships and full-time role preparation.
                                </p>
                            </>
                        )}

                        {active === "Workshops" && (
                            <>
                                <h2 className="events-detail-title">Workshops</h2>
                                <p className="events-detail-desc">
                                    Hands-on sessions led by professionals on topics like web development, AI implementation, and career development to grow practical skills.
                                </p>
                            </>
                        )}
                    </div>
                </div>

                {/* Event pictures (kept commented) */}
                {/* <img src={"/src/assets/old.jpg"} alt="event old" className="events-picture" id="events-picture-1" />
                <img src={"/src/assets/icpc.jpg"} alt="icpc" className="events-picture" id="events-picture-2" /> */}
            </section>
        </div>
    );
};

export default Events;