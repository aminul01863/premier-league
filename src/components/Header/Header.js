import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import './Header.css'
import bg from "../../Image/header.jpg"

const Header = () => {
    return (
        <Jumbotron fluid style={{ background: `url(${bg})`, height: "300px" }} className="header-image">
            <Container fluid className="text-center header-text" >

                <h1 className=" league">Premier league </h1>

            </Container>
        </Jumbotron>
    );
};

export default Header;