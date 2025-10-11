import "../styles/contact.css";

export const Contact = () => {
    return (
        <section className="contact-container">
            <div className="contact-title">
                <h1>CONTACT US</h1>
                <h3>ONLINE INQUIRY</h3>
            </div>
            <div className="contact-forms">
                <input type="text" className="contact-name" name="Name" placeholder="Name"/>
                <input type="text" className="contact-email" name="Email" placeholder="Email"/>
                <input type="text" className="contact-number" name="Number" placeholder="Phone Number"/>
                <textarea className="contact-message" name="Message" placeholder="Message"/>
            </div>
        </section>
    ) 
}
