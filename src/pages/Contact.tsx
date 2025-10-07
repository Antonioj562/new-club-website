import "../styles/contact.css";

export const Contact = () => {
    return (
        <section className="contact-container">
            <div className="contact-title">
                <h1>CONTACT US</h1>
                <h3>ONLINE INQUIRY</h3>
            </div>
            <div className="contact-forms">
                <input type="text" id="contact-name" name="Name" placeholder="Name"/>
                <input type="text" id="contact-email" name="Email" placeholder="Email"/>
                <input type="text" id="contact-number" name="Number" placeholder="Phone Number"/>
                <input type="text" id="contact-message" name="Message" placeholder="Message"/>
            </div>
        </section>
    ) 
}
