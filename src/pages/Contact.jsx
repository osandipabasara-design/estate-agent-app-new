import "./Contact.css";

const Contact = () => {
    return (
      <div className="contact-page">
        <h1>Contact Us</h1>

        <p className="contact-intro">
            Get in touch with us.
        </p>

        <div className="contact-section">
            {/*Contact Form */}
            <div className="contact-form">
                <form>
                    <label for="name">Name : </label>
                    <input type="text" placeholder="Enter Your Name" />

                    <label for="email">Email : </label>
                    <input type="text"  placeholder="example@email.com" />

                    <label for="message">Message : </label>
                    <textarea placeholder="type your message here"></textarea>

                    <button type="submit">Send Message</button>

                </form>
            </div>
        

            {/*Contact Info */}
            <div className="contact-info">
                <h2>Contact Information</h2>

                <p><strong>Email : </strong>w2153603@westminster.ac.uk</p>
                <p><strong>Phone : </strong>+44 20 7946 0958</p>
                <p><strong>Address : </strong>45 King William Street, Lond, EC4R 9AN, UK</p>
            </div>
        </div>


      </div>
    );
  };
  
  export default Contact;
  