import React from "react";
import Home from "./Home";
const About = () => {
    const data = {
        first: "John",
        last: "Doe"
    }
    return (
        <div>
        <Home {...data} />
        {/* Home first={data.first} last = {data.last} */}
        </div>
    );
}

export default About;