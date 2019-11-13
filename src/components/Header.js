import * as React from "react"
import avatar from "../imgs/avatar.jpg"
import { graphql, StaticQuery } from "gatsby"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      needFixNav: false,
    }
  }

  isNeedFixNav = () => {
    const fixedTop = document.getElementById("page-nav-wrapper").getBoundingClientRect().top
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
    const fixedTop = document.getElementById(elementId).offsetTop
    window.scrollTo({
      top: fixedTop - 100,
      behavior: "smooth",
    })
  }

  componentDidMount() {
    this.isNeedFixNav()
  }

  render() {
    const navClassName = `page-nav-wrapper text-center ${this.state.needFixNav ? "fixed" : ""}`
    const { name, jobTitle, selfIntroduction, email, address, phone, personalWebSite,resumeDownloadLink } = this.props.data.profileJson
    return (
      <header className="header">
        <div className="top-bar container-fluid">
          <div className="actions">
            <a className="btn hidden-xs" href="mailto:someone@example.com">
              <i className="fa fa-paper-plane" aria-hidden="true"/>
              Hire Me
            </a>
            <a className="btn" href={resumeDownloadLink}>
              <i className="fa fa-download" aria-hidden="true"/>
              View My Resume
            </a>
          </div>
          <ul className="social list-inline">
            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"/></a></li>
            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"/></a></li>
            <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"/></a></li>
            <li><a href="#"><i className="fa fa-github-alt" aria-hidden="true"/></a></li>
            <li><a href="#"><i className="fa fa-skype" aria-hidden="true"/></a></li>
          </ul>
        </div>
        <div className="intro">
          <div className="container text-center">
            <img className="profile-image" src={avatar} alt=""/>
            <h1 className="name">{name}</h1>
            <div className="title">{jobTitle}</div>
            <div className="profile">
              <p>{selfIntroduction}</p>
            </div>
          </div>
          {/*container*/}
        </div>
        {/*intro*/}

        <div className="contact-info">
          <div className="container text-center">
            <ul className="list-inline">
              <li className="email"><i className="fa fa-envelope"/><a
                href={"mailto:" + email}>{email}</a></li>
              <li><i className="fa fa-phone"/>
                <a href={"tel: " + phone}>{phone}</a>
              </li>
              <li className="website">
                <i className="fa fa-globe"/>
                <a href="#" target="_blank">No website</a>
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
                    onClick={(e) => this.handleNavClick(e, "experiences-section")}
                  >
                    Experiences
                  </a>
                </li>
                <li>
                  <a className="scrollto"
                     onClick={(e) => this.handleNavClick(e, "education-section")}>Education</a>
                </li>
                <li>
                  <a className="scrollto"
                     onClick={(e) => this.handleNavClick(e, "skills-section")}>Skills</a>
                </li>
                <li>
                  <a className="scrollto"
                     onClick={(e) => this.handleNavClick(e, "testimonials-section")}>Testimonials</a>
                </li>
                <li>
                  <a className="scrollto"
                     onClick={(e) => this.handleNavClick(e, "portfolio-section")}>Portfolio</a>
                </li>
                <li>
                  <a className="scrollto"
                     onClick={(e) => this.handleNavClick(e, "contact-section")}>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    )
  }
}


export default () => (
  <StaticQuery
    query={graphql`
{
  profileJson {
    id
    jobTitle
    name,
    selfIntroduction,
    email,
    address,
    phone,
    personalWebSite,
    resumeDownloadLink
  }
}
    `}
    render={data => (
      <Header data={data}/>
    )}
  />
)

