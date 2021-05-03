import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./TeamDetail.css"
import male from "../../Image/male.png";
import female from "../../Image/female.png";
import { Container, Jumbotron } from 'react-bootstrap';
import bg from "../../Image/header.jpg"
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import found from "../../Image/found 1.png"
import flag from "../../Image/flag (1) 1.png"
import football from "../../Image/football (1) 1.png"
import gender from "../../Image/male-gender-sign 1.png"


const TeamDetail = () => {
    const { idTeam } = useParams();
    const [detail, setDetail] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data.teams[0]))
    }, [idTeam])

    const facebookIcon = <FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon>
    const TwitterIcon = <FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon>
    const youtubeIcon = <FontAwesomeIcon icon={faYoutube} size="2x"></FontAwesomeIcon>

    //conditional image//

    const image = detail.strGender === 'Male' ? male : female
    return (
        <div>
            <Jumbotron fluid style={{ background: `url(${bg})`, height: "300px" }}>
                <Container fluid className="text-center header-text" >
                    <img className=" img-fluid logo" src={detail.strTeamBadge} alt="" />
                </Container>
            </Jumbotron>
            <div className="colure-details">
                <div className="d-flex justify-content-center">
                    <div className="cart-container row align-items-center justify-content-around m-3 p-3">
                        <div className="col-md-6 detail-icon">
                            <h3>{detail.strAlternate}</h3>
                            <p>
                                <img src={found} alt="" />
                            Founded: {detail.intFormedYear}</p>
                            <p>
                                <img src={flag} alt="" />
                            Country: {detail.strCountry} </p>
                            <p>
                                <img src={football} alt="" />
                             Type of Sports: {detail.strSport}</p>
                            <p>
                                <img src={gender} alt="" />
                            Gender:{detail.strGender} </p>
                        </div>

                        <div className="conditional col-md-6">
                            <img src={image} alt="" />
                        </div>

                    </div>
                </div>

                <div className="description">
                    <p><small>{detail.strDescriptionEN}</small></p>
                </div>
                <div className="social-icon">
                    <a href="https://www.facebook.com/">{facebookIcon}</a>
                    <a href="https://www.youtube.com/" className="text-danger">{youtubeIcon}</a>
                    <a href="https://twitter.com/?lang=en">{TwitterIcon}</a>
                </div>
            </div>



        </div>
    );
};

export default TeamDetail;