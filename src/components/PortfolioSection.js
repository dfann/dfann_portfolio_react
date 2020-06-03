import React from 'react';
import emailImg from "../images/email-gold.png";
import githubImg from "../images/github-gold.png";
import linkedinImg from "../images/linkedin-gold.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import ponduImg from "../images/pondu-home-sm.952d7735.png"
import deliciousImg from "../images/now-thats-delicious.png"

const PortfolioSection = () => {
    return (
        <section id="portfolio">
            <Jumbotron>
                <Container className="content portfolio-content">
                    <Row>
                        <Col xs={12}>
                            <h1>Portfolio</h1>
                            <h2>Below you'll find some of my recent work</h2>
                        </Col>
                    </Row>
                    <Row className="social-links-row">
                        <Col xs={4}>
                            <PortfolioPiece
                                href={"./pondu/"}
                                imgSrc={ponduImg}
                                altText={"..."}
                                pieceName={"Pondu"}
                                pieceDescription={"Site I made for a start up built from a given wireframe."}
                            />
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

const PortfolioPiece = ({href, imgSrc, altText, pieceName, pieceDescription}) => {
    return (
        <div class="thumbnail crop">
            <a href={href}>
                <div class="img-wrap"> <img class="thumbnail-img" src={imgSrc} alt={altText} /> </div>
            </a>
            <div class="caption">
                <h3>{pieceName}</h3>
                <p>{pieceDescription}</p>
            </div>
        </div>
    );
}

export default PortfolioSection;