import React from "react";
import PropTypes from 'prop-types';
import { Link, useNavigate } from "react-router-dom";
const Home = ({first,last}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/About");
    } 
    return (
        <div id="/">
        <h1>First Name {first}</h1>
        <h1>Last Name {last}</h1>

        <button onClick={handleClick}>About</button>

        <Link to="/About">About</Link> &
        <Link to="/state">State  </Link>
        </div>
    );
}

export default Home;