import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const Home = ({first,last}) => {
    return (
        <div id="/">
        <h1>First Name {first}</h1>
        <h1>Last Name {last}</h1>
        <Link to="/About">About</Link> &
        <Link to="/state">State  </Link>
        </div>
    );
}

export default Home;