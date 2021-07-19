import React from 'react';
import { Form } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import Icons from '../components/icons';
import Footer from '../components/Footer';


function Home(props) {
  return (
    <div>
    <div className="App">
    <header className="title">
        <h1 >Ian Osborne's Portfolio</h1>
    </header>
    <section className="inner-content-style">
        <div id="About-Me" className="inner-content-style">
            <img src="./Images/My-Photo.jpg" className="float-left" alt=""  width="130" height="130"/>
            <h2>About Me</h2>
            <p>
                Hello, my name is Ian Osborne and I am learning to code. I spent the last 8 years of my life as a Commercial
                Real Estate professional working with tech companies to help them find office space. I wanted to know
                what exactly they were doing so I took a className to find out, and now here I am!
            </p>
        </div>
        <div id="My-Work" className="inner-content-style">
            <h2 className="mywork">My Work</h2>
            <div className="image-container">
                <div className="portfolio-images">
                    <h3>First Application - Run Buddy</h3>
                    <a href="https://riosborne6.github.io/run-buddy">
                        <img className="portfolio-images" src="./Images/mens-running-shoes-2x1-lowres4658.jpg" alt="" width="200" height="200"/>
                    </a>               
                    </div>
                <div className=" portfolio-images">
                        <h3>Group Project - BrewMaps</h3>
                        <a href="https://brewmap3.herokuapp.com/">
                            <img className="portfolio-images" src="./Images/brewmap-home.png" alt="" width="200" height="200" />
                        </a>
                </div>
            </div>
            <p>
                My Languages
            <Icons></Icons>
            </p>
        </div>
        <div id="Contact" className="inner-content-style">
            <h2>Contact</h2>
            <p>
                <li>(415) 710-0549 </li>
                <li>richard.ian.osborne@gmail.com</li>
                <li>https://github.com/riosborne6</li>
                <li>https://www.linkedin.com/in/rianosborne/</li>

            </p>
        </div>
    </section>
    <h4>Made with ❤️️ by Ian Osborne</h4>
    </div>
    </div>
  );
}
export default Home;

