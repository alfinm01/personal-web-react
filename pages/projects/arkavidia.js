import Head from "next/head"

import Layout from '../../components/Layout'

export default () => (
    <Layout>
        <Head>
            <title>Alfian Maulana | Arkavidia</title>
            <meta name="description" content="Arkavidia" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1><a href="https://www.arkavidia.id/" target="_blank">Arkavidia</a></h1>
                    </header>
                    <span className="image main"><a href="https://www.arkavidia.id/" target="_blank"><img src="/static/images/arkavidia-ss.png" alt="Arkavidia Screenshot" /></a></span>
                    <p><a href="https://www.arkavidia.id/" target="_blank">Arkavidia</a> is an annual HMIF ITB prestigius event that has different theme every year. This year, Arkavidia 6.0, theme is "Embracing Our Nation in Digital Transformation".</p>
                    <p>I contributed there as a frontend developer, focusing in main homepage and user dashboard with other 6 frontend developers, with the total IT Division team of 13 people.</p>
                    <p>The good is, this project is an open source project, so everyone can see it in <a href="https://github.com/orgs/arkavidia-hmif/dashboard" target="_blank">Arkavidia Github</a></p>
                    <ul className="links">
	                    Other contributors in this project are:
	                    <li><a href="https://id.linkedin.com/in/nellazabrina" target="_blank">Nella Zabrina</a></li>
	                    <li><a href="https://id.linkedin.com/in/muhammad-aditya-hilmy" target="_blank">Muhammad Aditya Hilmy</a></li>
	                    <li>and other 11 will soon to be attached (or go <a href="https://github.com/orgs/arkavidia-hmif/people" target="_blank">here</a>)</li>
                    </ul>
                    <p>Link: <a href="https://www.arkavidia.id/" target="_blank">arkavidia.id</a></p>
                </div>
            </section>
        </div>
    </Layout>
)
