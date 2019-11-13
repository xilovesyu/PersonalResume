import * as React from "react";
import avatar from '../imgs/avatar.jpg'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            needFixNav: false
        }
    }
    isNeedFixNav = () => {
        const fixedTop = document.getElementById('page-nav-wrapper').getBoundingClientRect().top
        window.onscroll = () => {
            let scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop)
            //控制元素块A随鼠标滚动固定在顶部
            if (scrollTop >= fixedTop) {
                this.setState({ needFixNav: true })
            } else if (scrollTop < fixedTop) {
                this.setState({ needFixNav: false })
            }
        }
    }

    handleNavClick = (e, elementId) => {
        e.preventDefault()
        console.log('element:', elementId)
        const fixedTop = document.getElementById(elementId).offsetTop
        console.log('element top:', fixedTop)
        window.scrollTo({
            top: fixedTop-100,
            behavior: "smooth"
        });
    }
    componentDidMount() {
        this.isNeedFixNav()
    }

    render() {
        const navClassName = `page-nav-wrapper text-center ${this.state.needFixNav? 'fixed': ''}`
        return (
            <header className="header">
                <div className="top-bar container-fluid">
                    <div className="actions">
                        <a className="btn hidden-xs" href="mailto:someone@example.com">
                            <i className="fa fa-paper-plane" aria-hidden="true"/>
                            Hire Me
                        </a>
                        <a className="btn" href="#">
                            <i className="fa fa-download" aria-hidden="true"></i> Download My
                            Resume</a>
                    </div>
                    {/*actions*/}
                    <ul className="social list-inline">
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github-alt" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-skype" aria-hidden="true"></i></a></li>
                    </ul>
                    {/*social*/}
                </div>
                {/*tool-bar*/}

                <div className="intro">
                    <div className="container text-center">
                        <img className="profile-image" src={avatar} alt=""/>
                        <h1 className="name">James Doe</h1>
                        <div className="title">Full Stack Developer</div>
                        <div className="profile">
                            <p>Profile info goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                Aenean
                                commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                                parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                                pellentesque
                                eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
                                vel,
                                aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.</p>
                        </div>
                    </div>
                    {/*container*/}
                </div>
                {/*intro*/}

                <div className="contact-info">
                    <div className="container text-center">
                        <ul className="list-inline">
                            <li className="email"><i className="fa fa-envelope"></i><a
                                href="mailto:someone@example.com">james.doe@website.com</a></li>
                            <li><i className="fa fa-phone"></i>
                                <a href="tel: 0123456789">0123 456 7890</a>
                            </li>
                            <li className="website">
                                <i className="fa fa-globe"></i>
                                <a href="#" target="_blank">portfoliosite.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="page-nav-space-holder hidden-xs">
                    <div id="page-nav-wrapper" className={navClassName}>
                        <div className="container">
                            <ul id="page-nav" className="nav page-nav list-inline">
                                <li>
                                    <a
                                        className="scrollto"
                                        href="#experiences-section"
                                        onClick={(e) => this.handleNavClick(e, 'experiences-section')}
                                    >
                                        Experiences
                                    </a>
                                </li>
                                <li>
                                    <a className="scrollto" href="#education-section" onClick={(e) => this.handleNavClick(e, 'education-section')}>Education</a>
                                </li>
                                <li>
                                    <a className="scrollto" href="#skills-section"
                                       onClick={(e) => this.handleNavClick(e, "skills-section")}>Skills</a>
                                </li>
                                <li>
                                    <a className="scrollto" href="#testimonials-section" onClick={(e) => this.handleNavClick(e, 'testimonials-section')}>Testimonials</a>
                                </li>
                                <li>
                                    <a className="scrollto" href="#portfolio-section" onClick={(e) => this.handleNavClick(e, 'portfolio-section')}>Portfolio</a>
                                </li>
                                <li>
                                    <a className="scrollto" href="#contact-section"  onClick={(e) => this.handleNavClick(e, 'contact-section')}>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
