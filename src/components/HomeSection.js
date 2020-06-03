import React from 'react';
import emailImg from "../images/email-gold.png";
import githubImg from  "../images/github-gold.png";
import linkedinImg from  "../images/linkedin-gold.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomeSection = () => {
    return (
        <section id="home">
            <div class="container content home-content">
                <div class="row">
                    <div class="col-xs-12 jumbotron">
                        <h1>David Fann</h1>
                        <h2>Let's Build Something Great Together</h2>
                        <hr />
                        <div class="row social-links-row">
                            <div class="col-md-4">
                                <a class="btn btn-primary btn-lg social-links" href="mailto:davidthomasfann@gmail.com" role="button">
                                    <img src={emailImg} />
                              Contact
                              </a>
                            </div>
                            <div class="col-md-4" >
                                <a class="btn btn-primary btn-lg social-links" href="https://github.com/dfann" role="button">
                                    <img src={githubImg} />
                                Github
                                </a>
                            </div>
                            <div class="col-md-4">
                                <a class="btn btn-primary btn-lg social-links" href="https://www.linkedin.com/in/dfann" role="button">
                                    <img src={linkedinImg} />
                                Linkedin
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default HomeSection;