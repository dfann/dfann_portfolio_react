import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Figure from 'react-bootstrap/Figure'
import ponduImg from "../images/pondu.png"
import ponduImgSmall from "../images/pondu-small.png"

import deliciousImg from "../images/thats-delicious.png"
import deliciousImgSmall from "../images/thats-delicious-small.png"

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
                                imgSrc={ponduImgSmall}
                                imgSrcLarge={ponduImg}
                                altText={"..."}
                                pieceName={"Pondu"}
                                pieceDescription={"Site I made for a start up built from a given wireframe."}
                            />
                        </Col>
                        <Col xs={4}>
                            <PortfolioPiece
                                href={"https://now-thats-delicions.herokuapp.com/"}
                                imgSrc={deliciousImgSmall}
                                imgSrcLarge={deliciousImg}
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

const PortfolioPiece = ({ href, imgSrc, imgSrcLarge, altText, pieceName, pieceDescription }) => {
    return (
        <a href={href} style={{ textDecoration: "none" }}>
            <Figure>
                <Figure.Image
                    alt={altText}
                    src={imgSrc}
                    srcSet={`${imgSrc} 400px, ${imgSrcLarge} 900px`}
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