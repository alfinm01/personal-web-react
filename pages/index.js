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
                    <article style={{backgroundImage: `url('/static/images/min/kimia-itb-min.png')`}}>
                        <header className="major">
                            <h3>ITB Chemistry IS</h3>
                            <p>An information system website for Chemistry ITB</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/arkavidia-logo-min.png')`}}>
                        <header className="major">
                            <h3>Arkavidia</h3>
                            <p>feugiat amet tempus</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/bistleague-min.png')`}}>
                        <header className="major">
                            <h3>BIST League</h3>
                            <p>Lorem etiam nullam</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/api-min.jpg')`}}>
                        <header className="major">
                            <h3>Wiki Region API & Digital Newspaper</h3>
                            <p>Nisl sed aliquam</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/power-min.jpg')`}}>
                        <header className="major">
                            <h3>ITB Electrical Power IS</h3>
                            <p>Ipsum dolor sit amet</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/employee-min.jpg')`}}>
                        <header className="major">
                            <h3>Employee Appointment Web Service</h3>
                            <p>Feugiat amet tempus</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/design-min.jpg')`}}>
                        <header className="major">
                            <h3>Medivice, Jalanin, Ineed</h3>
                            <p>Feugiat amet tempus</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/geprek-min.jpg')`}}>
                        <header className="major">
                            <h3>Documents: Crisbar</h3>
                            <p>Feugiat amet tempus</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/bps-logo-min.png')`}}>
                        <header className="major">
                            <h3>Document: Statistics Indonesia</h3>
                            <p>Feugiat amet tempus</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/askaraga-logo-min.jpg')`}}>
                        <header className="major">
                            <h3>Askaraga</h3>
                            <p>Feugiat amet tempus</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/loofow-min.jpg')`}}>
                        <header className="major">
                            <h3>Loofow</h3>
                            <p>Feugiat amet tempus</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/games-min.jpg')`}}>
                        <header className="major">
                            <h3>Random Simple Games</h3>
                            <p>Feugiat amet tempus</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/fintech-hackathon-min.jpeg')`}}>
                        <header className="major">
                            <h3>Hiso: Fintech Hackathon 2019</h3>
                            <p>Related story: <a href="https://medium-min.com/hmif-itb/fintech-hackathon-mimpi-200-juta-e9cd8b7bcdc3">Mimpi 200 juta by Christian Wibisono</a></p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/min/dua-pagi-min.jpg')`}}>
                        <header className="major">
                            <h3>Dua Pagi</h3>
                            <p>Hello</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    {/*<article style={{backgroundImage: `url('/static/images/min/pic06-min.jpg')`}}>
                        <header className="major">
                            <h3>Tanam</h3>
                            <p>Placeholdeer</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>*/}
                    <article style={{backgroundImage: `url('/static/images/min/other-min.jpg')`}}>
                        <header className="major">
                            <h3>Other: Video | TTKI | KWN</h3>
                            <p>Placeholdeer</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                </section>
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>Additional information</h2>
                        </header>
                        <p>Currently looking for internship on May-August. Interested in Software Engineer or Product Management position. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                        <ul className="actions">
                            <li><Link href="/landing"><a className="button next">Get Started</a></Link></li>
                        </ul>
                    </div>
                </section>
            </div>

        </div>
    </Layout>
)
