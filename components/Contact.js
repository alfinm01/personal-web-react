const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <div className="field">
                        <label htmlFor="note">Note: Your message will actually be sent to my email (Not yet implemented)</label>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" disabled /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a>me@alfianmaulana.com</a> (Primary)
                        <br />
                        <a>gmail@alfianmaulana.com</a>
                    </div>
                </section>
                <section>
                    <div id="phone-number" className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>+62 813 2666 1043</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>153A Tubagus Ismail Raya Street<br />
                        Coblong, Bandung, West Java<br />
                        Indonesia</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
