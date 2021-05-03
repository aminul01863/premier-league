import React from 'react';
import { Link } from 'react-router-dom';
import "./Team.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Team = (props) => {
    const { strTeam, strSport, strTeamBadge, idTeam } = props.team;
    return (
        <div className="containers">

            <div className="team-container">
                <div>
                    <img src={strTeamBadge} alt="" />
                    <h2>{strTeam}</h2>
                    <p> <small>sports type: {strSport}</small></p>
                </div>

                <div>
                    <Link to={`/team/${idTeam}`}>
                        <button className="main-button">Details <FontAwesomeIcon icon={faArrowRight} /></button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Team;