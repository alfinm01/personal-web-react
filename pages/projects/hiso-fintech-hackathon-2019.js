import Head from "next/head"

import Layout from '../../components/Layout'

export default () => (
    <Layout>
        <Head>
            <title>Alfian Maulana | Hiso: Fintech Hackathon 2019</title>
            <meta name="description" content="Fintech Hackathon 2019" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Hiso: Fintech Hackathon 2019</h1>
                    </header>
                    <span className="image main"><img src="/static/images/Homepage.png" alt="Hiso" /></span>
                    <p>Hiso is a financial management platform for small and medium enterprises (UMKM) with addition of investment and recommendation feature using AI.</p>
                    <p>It was built for Fintech Hackathon 2019 competition, with my role was to create frontend of the landing page and few of dashboard pages, also I created the presentation Powerpoint (even though it wasn't me who present it in the D-day).</p>
                    <p>It felt magical to think that we won 2nd place between all great apps that other teams built, </p>
                    <ul className="links">
                        My super team, Tim Karya Anak Cisitu, members:
                        <li><a href="https://www.linkedin.com/in/irluths/" target="_blank">Muhammad Fariz Luthfan Wakan</a>, The amazing team leader</li>
                        <li><a href="https://www.linkedin.com/in/riandiramadhan/" target="_blank">Muhammad Riandi Ramadhan</a>, The magical UI/UX designer and frontend coder</li>
                        <li><a href="https://www.linkedin.com/in/ahmadmutawalli/" target="_blank">Ahmad Mutawalli</a>, The superb backend engineer and my old friend</li>
                        <li><a href="https://www.linkedin.com/in/naufal-zhafran-latif-b33bb715b/" target="_blank">Naufal Zhafran Lathif</a>, The mesmerizing presentator</li>
                    </ul>
                    <p>Related story: <a href="https://medium-min.com/hmif-itb/fintech-hackathon-mimpi-200-juta-e9cd8b7bcdc3">Mimpi 200 juta by Christian Wibisono.</a></p>
                    <p>Link to presentation: <a href="https://drive.google.com/open?id=1om1fPJUCVGkX3ldY02fpJM9fOoVLy1g2" target="_blank">Hiso, sobat restomu!</a></p>
                </div>
            </section>
        </div>
    </Layout>
)
