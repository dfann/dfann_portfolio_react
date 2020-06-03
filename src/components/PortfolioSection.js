import React from 'react';
import emailImg from "../images/email-gold.png";
import githubImg from "../images/github-gold.png";
import linkedinImg from "../images/linkedin-gold.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Figure from 'react-bootstrap/Figure'
import ponduImg from "../images/pondu.png"
import deliciousImg from "../images/thats-delicious.png"

const PortfolioSection = () => {
    return (
        <section id="portfolio">
            <Jumbotron>
                <Container className="content portfolio-content">
                    <Row style={{ textAlign: "center" }}>
                        <h1>Portfolio</h1>
                        <h2>Below you'll find some of my recent work</h2>
                    </Row>
                    <Row style={{ display: "flex", flexFlow: "wrap", justifyContent: "center" }}>
                        <Col xs={4}>
                            <PortfolioPiece
                                href={"https://dfann.github.io/pondu.github.io/"}
                                imgSrc={ponduImg}
                                altText={"..."}
                                pieceName={"Pondu"}
                                pieceDescription={"Site I made for a start up built from a given wireframe."}
                            />
                        </Col>
                        <Col xs={4}>
                            <PortfolioPiece
                                href={"https://now-thats-delicions.herokuapp.com/"}
                                imgSrc={deliciousImg}
                                altText={"..."}
                                pieceName={"Now That's Deliciousu"}
                                pieceDescription={"Restaurant review site made with Node.JS and Bootstrap"}
                            />
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </section>
    );
}

const PortfolioPiece = ({ href, imgSrc, altText, pieceName, pieceDescription }) => {
    return (
        <a href={href} style={{ textDecoration: "none" }}>
            <Figure>
                <Figure.Image
                    alt={altText}
                    src={imgSrc}
                />
                <Figure.Caption style={{ textAlign: "center" }}>
                    <h3>{pieceName}</h3>
                    <p>{pieceDescription}</p>
                </Figure.Caption>
            </Figure>
        </a>
    );
}

export default PortfolioSection;