import React from 'react';
import { Form } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import Icons from '../components/icons';
import Footer from '../components/Footer';

function Home(props) {
  return (
    <div>
    <div className="App">
    <header>
        <h1>Ian Osborne - Master Coder</h1>
        <div>
            <ul>
                <li>
                    <a href="#About-Me">About Me</a>
                </li>
                <li>
                    <a href="#My-Work">My Work</a>
                </li>
                <li>
                    <a href="#Contact">Contact</a>
                </li>
            </ul>
        </div>
    </header>
    <div className="hero">
        <img src="./Images/Dude-Coding.jpg" alt="Ian-Coding"/>
    </div>
    <section className="content">
        <div id="About-Me" className="inner-content-style">
            <img src="./Images/My-Photo.jpg" className="float-left" alt="office supplies"/>
            <h2>About Me</h2>
            <p>
                Hello, my name is Ian Osborne and I am a new coder. I spent the last 8 years of my life as a Commercial
                Real Estate professional working with tech companies to help them find office space. I wanted to know
                what exactly they were doing so I took a className to find out, and now here I am!
            </p>
        </div>
        <div id="My-Work" className="inner-content-style">
            <h2>My Work</h2>
            <div className="image-container">
                <div className="portfolio-images">
                    <h3>First Application - Run Buddy</h3>
                    <a href="https://riosborne6.github.io/run-buddy">
                        <img className="portfolio-images" src="./Images/mens-running-shoes-2x1-lowres4658.jpg" alt=""/>
                    </a>               
                    </div>
                <div className=" portfolio-images">
                        <h3>Most Recent App - Budget Tracker</h3>
                        <a href="https://riosborne6.github.io/budget_tracker/">
                            <img className="portfolio-images" src="./Images/Kid-With-Gun.jpg" alt="" />
                        </a>
                </div>
            </div>
        </div>
        <div id="Contact" className="inner-content-style">
            <img src="./Images/Contact.png" className="float-left" alt="group of people" />
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
    <p>
        &copy; 2021 Ian Osborne Production Co
    </p>
    </div>
    </div>
  );
}
export default Home;

