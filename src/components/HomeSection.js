import React from 'react';
import emailImg from "../images/email-gold.png";
import githubImg from "../images/github-gold.png";
import linkedinImg from "../images/linkedin-gold.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'

const HomeSection = () => {
    return (
        <section id="home">
            <Jumbotron>
            <Container className="content home-content">
                <Row>
                    <Col xs={12}>
                        <h1>David Fann</h1>
                        <h2>Let's Build Something Great Together</h2>
                        <hr />
                    </Col>
                </Row>
                <Row className="social-links-row">
                    <Col xs={4}>
                        <Button href="mailto:davidthomasfann@gmail.com" className="social-links" variant="link">
                            <img src={emailImg} />
                            Contact
                         </Button>
                         <Button href="https://github.com/dfann" className="social-links" variant="link">
                        <img src={githubImg} />
                            Github
                         </Button>     
                         <Button href="https://www.linkedin.com/in/dfann" className="social-links" variant="link">
                         <img src={linkedinImg} />
                            Linkedin
                         </Button>     
                    </Col>
                </Row>
            </Container>
            </Jumbotron>
        </section>

    );
}

export default HomeSection;