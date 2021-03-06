import React from "react";
import { graphql, StaticQuery } from "gatsby"
import Circle from 'react-circle';

class Container extends React.Component {
    renderTestimonialsSection = () => {
        return (
          <section id="testimonials-section" className="testimonials-section section">
              <h2 className="section-title">Testimonials</h2>

              <div id="testimonials-carousel" className="testimonials-carousel carousel slide"
                   data-interval="8000">

                  <ol className="carousel-indicators">
                      <li data-target="#testimonials-carousel" data-slide-to="0" className="active"/>
                      <li data-target="#testimonials-carousel" data-slide-to="1"/>
                      <li data-target="#testimonials-carousel" data-slide-to="2"/>
                  </ol>

                  <div className="carousel-inner">
                      <div className="item active">
                          <blockquote className="quote">
                              <i className="fa fa-quote-left"/>
                              <p>James is an excellent software engineer and he is passionate about what he does.
                                  Lorem ipsum
                                  dolor sit amet, consectetuer adipiscing elit. Suspendisse porttitor metus
                                  eros.</p>
                          </blockquote>
                          <div className="source">
                              <div className="name">Rob Olson</div>
                              <div className="position">Product Manager, Apple</div>
                          </div>

                      </div>
                      <div className="item">
                          <blockquote className="quote">
                              <p><i className="fa fa-quote-left"/>
                                  Sed massa leo, aliquet non velit eu, volutpat vulputate odio. Interdum et
                                  malesuada fames ac
                                  ante ipsum primis in faucibus. Suspendisse porttitor metus eros, ut fringilla
                                  nulla auctor
                                  a.</p>

                          </blockquote>
                          <div className="source">
                              <div className="name">Christina Jensen</div>
                              <div className="position">Senior Developer, Twitter</div>
                          </div>

                      </div>
                      <div className="item">
                          <blockquote className="quote">
                              <p><i className="fa fa-quote-left"/>
                                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                                  eget dolor.
                                  Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes</p>
                          </blockquote>
                          <div className="source">
                              <div className="name">Austin Ward</div>
                              <div className="position">CEO, Startup Hub</div>
                          </div>
                      </div>

                  </div>
              </div>

          </section>
        )
    }

    renderGetTouchSection = () => {
        return <section id="contact-section" className="contact-section section">
            <h2 className="section-title">Get in Touch</h2>
            <div className="intro">
                <img className="profile-image" src="assets/images/profile-image.png" alt=""/>
                <div className="dialog">
                    <p>I'm currently taking on freelance work. Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit.
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                        dis
                        parturient montes. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                        consequat
                        vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                        tellus.</p>
                    <p><strong>I can help with the following:</strong></p>
                    <ul className="list-unstyled service-list">
                        <li><i className="fa fa-check" aria-hidden="true"/> App development with ReactJS</li>
                        <li><i className="fa fa-check" aria-hidden="true"/> Front-end development with
                            AngularJS
                        </li>
                        <li><i className="fa fa-check" aria-hidden="true"/> Back-end development with
                            Django/Python
                        </li>
                        <li><i className="fa fa-check" aria-hidden="true"/> UI development</li>
                        <li><i className="fa fa-check" aria-hidden="true"/> UX prototyping</li>
                    </ul>
                    <p>Drop me a line at <a href="mailto:someone@example.com">james.doe@website.com</a> or call
                        me at <a
                          href="tel:01234567890">0123 456 7890</a></p>
                    <ul className="social list-inline">
                        <li><a ><i className="fa fa-linkedin" aria-hidden="true"/></a></li>
                        <li><a ><i className="fa fa-twitter" aria-hidden="true"/></a></li>
                        <li><a ><i className="fa fa-google-plus" aria-hidden="true"/></a></li>
                        <li><a ><i className="fa fa-github-alt" aria-hidden="true"/></a></li>
                        <li><a ><i className="fa fa-skype" aria-hidden="true"/></a></li>
                    </ul>
                </div>
            </div>

        </section>
    }

    renderSkillPercentage = (progress) => {
        return <Circle
          animate={true} // Boolean: Animated/Static progress
          animationDuration="1s" // String: Length of animation
          responsive={false} // Boolean: Make SVG adapt to parent size
          size="150" // String: Defines the size of the circle.
          lineWidth="15" // String: Defines the thickness of the circle's stroke.
          progress={progress} // String: Update to change the progress and percentage.
          progressColor="rgb(76, 154, 255)" // String: Color of "progress" portion of circle.
          bgColor="#ecedf0" // String: Color of "empty" portion of circle.
          textColor="#6b778c" // String: Color of percentage text color.
          textStyle={{
              font: 'bold 4rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
          }}
          percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
          roundedStroke={false} // Boolean: Rounded/Flat line ends
          showPercentage={true} // Boolean: Show/hide percentage.
          showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
        />
    }
    constructor(props) {
        super(props)
        this.state = {
            portfolioActive: [true, false, false],
            portfolioFilter: () => {return true}
        }
    }
    onPortfolioClick = (e, filter) => {
        e.preventDefault()
        let currentActive = this.state.portfolioActive.slice()
        let portfolioFilter = null;
        switch (filter) {
            case "*":
                currentActive = [true, false, false]
                portfolioFilter = () => true
                break
            case ".backend":
                currentActive = [false, true, false]
                portfolioFilter = (one) => one.type === "backend"
                break
            case ".frontend":
                currentActive = [false, false, true]
                portfolioFilter = (one) => one.type === "frontend"
                break
            default:
                currentActive = [true, false, false]
                portfolioFilter = () => true
                break
        }
        this.setState({
            portfolioActive: currentActive,
            portfolioFilter: portfolioFilter,
        })
    }
    render() {
        const experience = this.props.data.allExperienceJson.edges
        const education = this.props.data.allEducationJson.nodes
        const portfolio = this.props.data.allProjectsJson.nodes
        const portfolioActive = this.state.portfolioActive
        const skills = this.props.data.skillsJson
        return (
            <div className="wrapper container">
                <section id="experiences-section" className="experiences-section section">
                    <h2 className="section-title">Work Experiences</h2>
                    <div className="timeline">
                        {
                            experience.map((one, index) => {
                                const {company, description, time, title, tags, location} = one.node
                                return (
                                  <div className="item" key={index}>
                                      <div className="work-place">
                                          <h3 className="place">{company}</h3>
                                          <div className="location">
                                              <i className="fa fa-map-marker" aria-hidden="true"/>
                                              {location}
                                          </div>
                                      </div>
                                      <div className="job-meta">
                                          <div className="title">{title}</div>
                                          <div className="time">{time}</div>
                                      </div>
                                      <div className="job-desc">
                                          <p>{description}</p>
                                          <ul>
                                              {
                                                  tags.map((tag, index2) => {
                                                      return  <li key={index2}>{tag}</li>
                                                  })
                                              }
                                          </ul>
                                      </div>
                                  </div>
                                )
                            })
                        }
                    </div>
                </section>

                <section id="education-section" className="education-section section">
                    <h2 className="section-title">Education</h2>
                    <div className="row">
                        {
                            education.map((one,index) => {
                                const {schoolName, time, major,degree,description} = one
                                return (
                                  <div className="item col-xs-12 col-sm-4" key={index}>
                                      <div className="item-inner">
                                          <h3 className="degree">{degree}</h3>
                                          <div className="education-body">
                                              {schoolName}
                                          </div>
                                          <div className="time">{time}</div>
                                          <div className="desc">
                                              {description}
                                          </div>
                                      </div>
                                  </div>
                                )
                            })
                        }
                    </div>
                </section>


                <section id="skills-section" className="skills-section section text-center">
                    <h2 className="section-title">Professional Skills</h2>
                    <div className="top-skills">
                        <h3 className="subtitle">Top Skills</h3>
                        <div className="row">
                            {
                                skills.mainSkills.map((one, index) => {
                                    return <div className="item col-xs-12 col-sm-4" key={index}>
                                        <div className="item-inner">
                                            <div className="chart-easy-pie text-center">
                                                {this.renderSkillPercentage(one.proficiencyPercentage)}
                                            </div>
                                            <h4 className="skill-name">{one.name}</h4>
                                            <div className="level">{one.proficiency}</div>
                                            <div className="desc">
                                                {
                                                    one.description
                                                }
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    <div className="other-skills">
                        <h3 className="subtitle">Other Skills</h3>
                        <div className="misc-skills">
                            {
                                skills.otherSkills.map((one, index) => {
                                    return  <span className="skill-tag" key={index}>{one}</span>
                                })
                            }
                        </div>
                    </div>

                </section>

                {/*this.renderTestimonialsSection()*/}

                <section id="portfolio-section" className="portfolio-section section">
                    <h2 className="section-title">Portfolio</h2>
                    <ul id="filters" className="filters clearfix">
                        <li className={"type "+(portfolioActive[0]?"active":"")} data-filter="*" onClick={(e)=>this.onPortfolioClick(e, '*')}>All</li>
                        <li className={"type "+(portfolioActive[1]?"active":"")} data-filter=".backend" onClick={(e)=>this.onPortfolioClick(e, '.backend')}>Back-end</li>
                        <li className={"type "+(portfolioActive[2]?"active":"")} data-filter=".frontend" onClick={(e)=>this.onPortfolioClick(e, '.frontend')}>Front-end</li>
                    </ul>
                    <div className="items-wrapper isotope row">
                        {
                            portfolio.filter(this.state.portfolioFilter).map((one, index) => {
                                let src = null;
                                try {
                                    src = require(one.pic)
                                }catch (e) {
                                    src = 'no pic'
                                }
                                return (
                                  <div className={"item "+one.type+" col-md-3 col-xs-6"} key={index}>
                                      <div className="item-inner">
                                          <figure className="figure">
                                              <img className="img-responsive" src={src}  alt=""/>
                                          </figure>
                                          <div className="content text-left">
                                              <h3 className="sub-title"><a >{one.name}</a></h3>
                                              <div className="meta">{one.mainTech}</div>
                                              <div className="action"><a href={one.url}>View WebSite</a></div>
                                          </div>
                                          <a className="link-mask" ></a>
                                      </div>
                                  </div>
                                )
                            })
                        }
                    </div>

                </section>

                {/*{this.renderGetTouchSection()}*/}
            </div>
        );
    }
}




export default () => (
  <StaticQuery
    query={graphql`
query MyQuery {
  allExperienceJson {
    edges {
      node {
        id
        time
        title
        company
        description,
        tags,
        location
      }
    }
  }
  allEducationJson {
    nodes {
      schoolName
      time
      major
      description
      degree
    }
  }
  allProjectsJson {
    nodes {
      name
      type
      url,
      pic,
      mainTech
    }
  }
  skillsJson {
    otherSkills
    mainSkills {
      description
      name
      proficiency
      proficiencyPercentage
    }
  }
}
    `}
    render={data => (
      <Container data={data}/>
    )}
  />
)
