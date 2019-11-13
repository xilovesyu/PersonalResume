import React from "react";
import { graphql, StaticQuery } from "gatsby"

class Container extends React.Component {
    render() {
        const experience = this.props.data.allExperienceJson.edges
        const education = this.props.data.allEducationJson.nodes
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
                            <div className="item col-xs-12 col-sm-4">
                                <div className="item-inner">
                                    <div className="chart-easy-pie text-center">
                                        <div className="chart-theme-1 chart" data-percent="98"><span>98</span>%</div>
                                    </div>
                                    <h4 className="skill-name">Python &amp; Django</h4>
                                    <div className="level">Expert, 8 years</div>
                                    <div className="desc">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                                        eget dolor.
                                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                                    </div>
                                </div>
                            </div>
                            <div className="item col-xs-12 col-sm-4">
                                <div className="item-inner">
                                    <div className="chart-easy-pie text-center">
                                        <div className="chart-theme-1 chart" data-percent="90"><span>90</span>%</div>
                                    </div>
                                    <h4 className="skill-name">JavaScript</h4>
                                    <div className="level">Expert, 8 years</div>
                                    <div className="desc">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                                        eget dolor.
                                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                                    </div>
                                </div>
                            </div>
                            <div className="item col-xs-12 col-sm-4">
                                <div className="item-inner">
                                    <div className="chart-easy-pie text-center">
                                        <div className="chart-theme-1 chart" data-percent="85"><span>85</span>%</div>
                                    </div>
                                    <h4 className="skill-name">React &amp; Angular</h4>
                                    <div className="level">Advanced, 4 years</div>
                                    <div className="desc">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                                        eget dolor.
                                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="other-skills">
                        <h3 className="subtitle">Other Skills</h3>
                        <div className="misc-skills">
                            <span className="skill-tag">HTML5</span>
                            <span className="skill-tag">CSS3</span>
                            <span className="skill-tag">SASS</span>
                            <span className="skill-tag">LESS</span>
                            <span className="skill-tag">Git</span>
                            <br/>
                            <span className="skill-tag">Ruby</span>
                            <span className="skill-tag">PHP</span>
                            <span className="skill-tag">Wireframe</span>
                            <span className="skill-tag">Spanish</span>
                            <span className="skill-tag">French</span>
                        </div>
                    </div>

                </section>

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


                <section id="portfolio-section" className="portfolio-section section">
                    <h2 className="section-title">Portfolio</h2>
                    <ul id="filters" className="filters clearfix">
                        <li className="type active" data-filter="*">All</li>
                        <li className="type" data-filter=".backend">Back-end</li>
                        <li className="type" data-filter=".frontend">Front-end</li>
                    </ul>
                    <div className="items-wrapper isotope row">
                        <div className="item frontend col-md-3 col-xs-6 ">
                            <div className="item-inner">
                                <figure className="figure">
                                    <img className="img-responsive" src="assets/images/portfolio/portfolio-1.jpg"
                                         alt=""/>
                                </figure>
                                <div className="content text-left">
                                    <h3 className="sub-title"><a>Project Lorem Ipsum</a></h3>
                                    <div className="meta">AngularJS</div>
                                    <div className="action"><a >View on Github</a></div>
                                </div>
                                <a className="link-mask" ></a>
                            </div>
                        </div>
                        <div className="item backend col-md-3 col-xs-6 ">
                            <div className="item-inner">
                                <figure className="figure">
                                    <img className="img-responsive" src="assets/images/portfolio/portfolio-2.jpg"
                                         alt=""/>
                                </figure>
                                <div className="content text-left">
                                    <h3 className="sub-title"><a >Project Lorem Ipsum</a></h3>
                                    <div className="meta">Django</div>
                                    <div className="action"><a >View on Github</a></div>
                                </div>
                                <a className="link-mask" />
                            </div>
                        </div>
                        <div className="item backend frontend col-md-3 col-xs-6 ">
                            <div className="item-inner">
                                <figure className="figure">
                                    <img className="img-responsive" src="assets/images/portfolio/portfolio-3.jpg"
                                         alt=""/>
                                </figure>
                                <div className="content text-left">
                                    <h3 className="sub-title"><a >Project Lorem Ipsum</a></h3>
                                    <div className="meta">Django/JavaScript</div>
                                    <div className="action"><a >View on Github</a></div>
                                </div>
                                <a className="link-mask" />
                            </div>
                        </div>
                        <div className="item frontend col-md-3 col-xs-6 ">
                            <div className="item-inner">
                                <figure className="figure">
                                    <img className="img-responsive" src="assets/images/portfolio/portfolio-4.jpg"
                                         alt=""/>
                                </figure>
                                <div className="content text-left">
                                    <h3 className="sub-title"><a >Project Lorem Ipsum</a></h3>
                                    <div className="meta">ReactJS</div>
                                    <div className="action"><a >View on Github</a></div>
                                </div>
                                <a className="link-mask" ></a>
                            </div>
                        </div>
                        <div className="item backend col-md-3 col-xs-6 ">
                            <div className="item-inner">
                                <figure className="figure">
                                    <img className="img-responsive" src="assets/images/portfolio/portfolio-5.jpg"
                                         alt=""/>
                                </figure>
                                <div className="content text-left">
                                    <h3 className="sub-title"><a >Project Lorem Ipsum</a></h3>
                                    <div className="meta">Python</div>
                                    <div className="action"><a >View on Github</a></div>
                                </div>
                                <a className="link-mask" ></a>
                            </div>
                        </div>
                        <div className="item backend col-md-3 col-xs-6 ">
                            <div className="item-inner">
                                <figure className="figure">
                                    <img className="img-responsive" src="assets/images/portfolio/portfolio-6.jpg"
                                         alt=""/>
                                </figure>
                                <div className="content text-left">
                                    <h3 className="sub-title"><a >Project Lorem Ipsum</a></h3>
                                    <div className="meta">JavaScript</div>
                                    <div className="action"><a >View on Github</a></div>
                                </div>
                                <a className="link-mask" ></a>
                            </div>
                        </div>

                        <div className="item frontend col-md-3 col-xs-6 ">
                            <div className="item-inner">
                                <figure className="figure">
                                    <img className="img-responsive" src="assets/images/portfolio/portfolio-7.jpg"
                                         alt=""/>
                                </figure>
                                <div className="content text-left">
                                    <h3 className="sub-title"><a >Project Lorem Ipsum</a></h3>
                                    <div className="meta">HTML/AngularJS</div>
                                    <div className="action"><a >View on Github</a></div>
                                </div>
                                <a className="link-mask" ></a>
                            </div>
                        </div>

                        <div className="item frontend backend col-md-3 col-xs-6 ">
                            <div className="item-inner">
                                <figure className="figure">
                                    <img className="img-responsive" src="assets/images/portfolio/portfolio-8.jpg"
                                         alt=""/>
                                </figure>
                                <div className="content text-left">
                                    <h3 className="sub-title"><a >Project Lorem Ipsum</a></h3>
                                    <div className="meta">Python/AngularJS</div>
                                    <div className="action"><a >View on Github</a></div>
                                </div>
                                <a className="link-mask" ></a>
                            </div>
                        </div>

                    </div>

                </section>

                <section id="contact-section" className="contact-section section">
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
}
    `}
    render={data => (
      <Container data={data}/>
    )}
  />
)
