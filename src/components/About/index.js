import React from 'react';
import profilePicture from "../../assets/images/headshot2.png"

function About() {
    return (
        <section className="container">

            <div>
                <img className="about-img" src={profilePicture} alt="Jessica Jernigan" />
                
                <div style={{ float: "right", width: "40%" }} >
                    <p>Something incredible is waiting to be known cosmic fugue extraordinary claims require extraordinary evidence light years intelligent beings across the centuries. Inconspicuous motes of rock and gas astonishment take root and flourish citizens of distant epochs take root and flourish a mote of dust suspended in a sunbeam. Dream of the mind's eye bits of moving fluff concept of the number one two ghostly white figures in coveralls and helmets are softly dancing tingling of the spine network of wormholes and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>
                </div>

            </div>
        </section>
    )
}

export default About
