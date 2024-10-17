import React from "react";
import Home from "./Home";
const About = () => {
    const data = {
        first: "John",
        last: "Doe"
    }
    return (
        <div>
            <h1>About</h1>
        <Home {...data} />
        {/* Home first={data.first} last = {data.last} */}
        </div>
    );
}

export default About;