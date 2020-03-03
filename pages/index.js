import Link from 'next/link'
import Head from "next/head"

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/min/arkavidia-logo-min.png')`}}>
                        <header className="major">
                            <h3>Arkavidia</h3>
                            <p>HMIF ITB prestigius annual event</p>
                        </header>
                        <Link href="/projects/arkavidia"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/fintech-hackathon-min.jpeg')`}}>
                        <header className="major">
                            <h3>Hiso: Fintech Hackathon 2019</h3>
                            <p>Journey of a 200 million dream</p>
                        </header>
                        <Link href="/projects/hiso-fintech-hackathon-2019"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/askaraga-logo-min.jpg')`}}>
                        <header className="major">
                            <h3>Askaraga</h3>
                            <p>Website for Karang Praga Goes to School 2019</p>
                        </header>
                        <Link href="/projects"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/kimia-itb-min.png')`}}>
                        <header className="major">
                            <h3>ITB Chemistry IS</h3>
                            <p>An information system website for Chemistry ITB</p>
                        </header>
                        <Link href="/projects"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/loofow-min.jpg')`}}>
                        <header className="major">
                            <h3>Loofow</h3>
                            <p>Lost and found website</p>
                        </header>
                        <Link href="/projects"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/power-min.jpg')`}}>
                        <header className="major">
                            <h3>ITB Electrical Power IS</h3>
                            <p>An information system website for Electrical Power ITB</p>
                        </header>
                        <Link href="/projects"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/bistleague-min.png')`}}>
                        <header className="major">
                            <h3>BIST League</h3>
                            <p>ASSISTS ITB annual business IT case competition</p>
                        </header>
                        <Link href="/projects"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/api-min.jpg')`}}>
                        <header className="major">
                            <h3>Wiki Region API & Digital Newspaper</h3>
                            <p>API for facts and region in Indonesia, and its implementation app</p>
                        </header>
                        <Link href="/projects"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/employee-min.jpg')`}}>
                        <header className="major">
                            <h3>Employee Appointment Web Service</h3>
                            <p>Web app for ITB employee appointment process</p>
                        </header>
                        <Link href="/projects"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/dua-pagi-min.jpg')`}}>
                        <header className="major">
                            <h3>Dua Pagi</h3>
                            <p>From zero to hero (yet)</p>
                        </header>
                        <Link href="/projects"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/design-min.jpg')`}}>
                        <header className="major">
                            <h3>Medivice, Jalanin, iNeed</h3>
                            <p>UI/UX mockups design for healthcare, travel, and commerce app</p>
                        </header>
                        <Link href="/projects"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/geprek-min.jpg')`}}>
                        <header className="major">
                            <h3>Documents: Crisbar</h3>
                            <p>Crisbar's system and enterprise requirements analysis</p>
                        </header>
                        <Link href="/projects"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/bps-logo-min.png')`}}>
                        <header className="major">
                            <h3>Document: Statistics Indonesia</h3>
                            <p>Project management plan to improve survey system by using mobile technology</p>
                        </header>
                        <Link href="/projects"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/tanam.jpg')`}}>
                        <header className="major">
                            <h3>Tanam</h3>
                            <p>Smart farming and precision agriculture</p>
                        </header>
                        <Link href="/projects"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/games-min.jpg')`}}>
                        <header className="major">
                            <h3>Random Simple Games</h3>
                            <p>random simple games</p>
                        </header>
                        <Link href="/projects"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/other-min.jpg')`}}>
                        <header className="major">
                            <h3>Others</h3>
                            <p>My other projects</p>
                        </header>
                        <Link href="/projects"><a className="link primary"></a></Link>
                    </article>
                </section>
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>Additional information</h2>
                        </header>
                        <p>Currently looking for internship on May-August. Interested in Software Engineer or Product Management position.</p>
                        <ul className="actions">
                            <li><Link href="#banner"><a className="button next">To the top</a></Link></li>
                        </ul>
                    </div>
                </section>
            </div>

        </div>
    </Layout>
)
