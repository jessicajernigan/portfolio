import React from 'react';
import profilePicture from "../../assets/images/headshot.png"

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={profilePicture}  style={{ width: "50%" }} alt="Jessica Jernigan"/>
        </section>
    );
}

export default About;
