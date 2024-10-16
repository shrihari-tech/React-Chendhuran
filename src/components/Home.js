import React from "react";
import PropTypes from 'prop-types';

const Home = ({first,last}) => {
    return (
        <div>
        <h1>First Name {first}</h1>
        <h1>Last Name {last}</h1>
        </div>
    );
}

export default Home;