import PropTypes from 'prop-types'
import Link from 'next/link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link href="#banner"><a><span onClick={props.onToggleMenu}>Intro</span></a></Link></li>
                <li><Link href="#main"><a><span onClick={props.onToggleMenu}>Showcase</span></a></Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="#contact" className="button special fit">Contact Me</a></li>
                <li><a href="https://docs.google.com/document/d/1K_929eTEKFd3NL68SIRmlvE2YbJYVCT4vw6KxugyfRk/edit?usp=sharing" target="_blank" className="button fit">View Resume</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu}>Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
