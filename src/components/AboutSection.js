import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron'
import portraitImg from '../images/David-Fann.jpeg'
import Figure from 'react-bootstrap/Figure';

const AboutSection = () => {
    return (
        <section id="about">
            <Jumbotron>
                <Container className="content about-content">
                    <Row>
                        <Figure>
                            <Figure.Caption style={{ textAlign: "center" }}>
                                <h2>Hi! I'm a Full Stack Web Developer that specializes in creating web based applications in Python, Node.JS, and React.</h2>
                            </Figure.Caption>
                            <Figure.Image alt="..." src={portraitImg} style={{width: 375, height: 500}} />
                        </Figure>
                    </Row>
                </Container>
            </Jumbotron>

        </section>
    );
}

export default AboutSection;