import React, { useEffect, useState } from 'react';
import "react-bootstrap/Card"
import Team from '../Team/Team';
import "./Home.css"

const Home = () => {

    const [team, setTeam] = useState([]);

    useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain")
            .then(res => res.json())
            .then(data => setTeam(data.teams));
    }, [])

    return (
        <div className="display bg-dark ">

            {
                team.map(lg => <Team team={lg}></Team>)
            }
        </div>
    );
};

export default Home;