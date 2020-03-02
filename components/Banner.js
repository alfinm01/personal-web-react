const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Hi, my name is Alfian</h1>
            </header>
            <div className="content">
                <ul className="icons">
                {/*<li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>*/}
                {/*<li><a href="#phone-number" className="icon alt fa-whatsapp"><span className="label">Whatsapp</span></a></li>*/}
                <li><a href="https://github.com/alfinm01" target="_blank" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/in/alfinm01/" target="_blank" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                <li><a href="https://medium.com/@alfianm.ibrahim" target="_blank" className="icon alt fa-medium"><span className="label">Medium</span></a></li>
                <li><a href="https://www.instagram.com/alfian.maulanai/" target="_blank" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                </ul>
                <p>
                    Is trying to balance life...<br />
                    Information System and Technology Undergraduate  <br />
                    at Institut Teknologi Bandung. <br />
                </p>
                <ul className="actions">
                    <li><a href="#main" className="button next scrolly">See Showcase</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
