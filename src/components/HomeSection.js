import React from 'react';
import emailImg from "../images/email.svg";
import githubImg from "../images/github.svg";
import linkedinImg from "../images/li.svg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Figure from 'react-bootstrap/Figure';

const HomeSection = () => {
    return (
        <section id="home">
            <Jumbotron fluid>
                <Container fluid className="content home-content">
                    <Row>
                        <Col xs={12}>
                            <h1>David Fann</h1>
                            <h2>Let's Build Something Great Together</h2>
                            <hr />
                        </Col>
                    </Row>
                    <Row className="social-links-row" style={{display: "flex", flexFlow: "wrap", justifyContent: "center"}}>                        
                            <ContactLink href="mailto:davidthomasfann@gmail.com" imgSrc={emailImg} altText="..." contactDescription="Email" />
                            <ContactLink href="https://github.com/dfann" imgSrc={githubImg} altText="..." contactDescription="Github" />
                            <ContactLink href="https://www.linkedin.com/in/dfann" imgSrc={linkedinImg} altText="..." contactDescription="LinkedIn" />                        
                    </Row>
                </Container>
            </Jumbotron>
        </section>

    );
}

const ContactLink = ({ href, imgSrc, altText, contactDescription }) => {
    return (
        <Figure>
            <Figure.Image
                alt={altText}
                src={imgSrc}
                style={{ width: 50, height: 50 }}
            />
            <Figure.Caption style={{ textAlign: "center" }}>
                <p>{contactDescription}</p>
            </Figure.Caption>
        </Figure>      
    )
}

export default HomeSection;