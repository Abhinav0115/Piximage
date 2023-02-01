/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./components.css";

export default function About() {
    return (
        <Container className="AboutPage">
            {/* Intro */}
            <Row className="">
                <div className="Intro pt-5 pb-5 d-flex justify-content-around">
                    <div className="pt-3 d-flex flex-column justify-content-between">
                        <h1 className="mt-5 name text-warning fw-bold ">
                            I'm <span className="">Abhinav</span>
                        </h1>
                        <h2 className="about-me text-white position-relative">
                            a <span className="">frontend</span> Web Developer
                        </h2>
                    </div>
                    <div>
                        <img
                            className="avatar rounded-circle d-flex"
                            src="https://avatars.githubusercontent.com/u/55048962?s=400&u=3dad8326af51320b8190f99f0a07d7ec39243239&v=4"
                            alt="Profile image"
                        />
                    </div>
                </div>
            </Row>

            {/* about */}
            <Row className="text-dark">
                <div className="about2 m-0 pb-4 text-center">
                    <div className="brief-about-me mt-4 d-flex position-relative">
                        <div className="img">
                            <img
                                className="avatar img-2 rounded d-flex me-4 mt-5"
                                src="https://avatars.githubusercontent.com/u/55048962?s=400&u=3dad8326af51320b8190f99f0a07d7ec39243239&v=4"
                                alt="abvhinav anand"
                            />
                        </div>
                        <div className="about-me-desc me-1 ms-5">
                            <h2 className="fw-bold mb-3"> About Me</h2>
                            <p>
                                I love to break boundaries and I always come
                                with a 'can do' attitude with a strong sense of
                                responsibility looking forward to working with a
                                team that enjoys challenging projects and has an
                                innovative outlook.
                            </p>
                            <p>
                                I am also open to tips on interview preparation,
                                building a personal brand, launching a start-up,
                                and he really really needs productivity tips.
                            </p>
                            <p>
                                I always open to new opportunities and would
                                love to have a chat over coffee.
                            </p>
                            <p>
                                He is always open to new opportunities and would
                                love to have a chat over coffee.
                            </p>
                        </div>
                    </div>
                </div>
            </Row>

            {/* Skill */}
            {/* <Row className="text-dark">
                <div className="container-3" id="Skills">
                    <h1>Skills</h1>
                    <div className="skills">
                        <a href="https://en.wikipedia.org/wiki/C_(programming_language)">
                            <img
                                className="skill-img"
                                src="Images/c prog.png"
                                alt="C programming"
                            />
                        </a>
                        <a href="https://en.wikipedia.org/wiki/C%2B%2B">
                            <img
                                className="skill-img"
                                src="Images/cpp.png"
                                alt="C++ Programming "
                            />
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                            <img
                                className="skill-img"
                                src="Images/html.png"
                                alt="HTML"
                            />
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                            <img
                                className="skill-img"
                                src="Images/js.jpg"
                                alt="Java Script"
                            />
                        </a>
                        <a href="https://docs.python.org/3/">
                            <img
                                className="skill-img"
                                src="Images/python 2.png"
                                alt="Python"
                            />
                        </a>
                        <a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/">
                            <img
                                className="skill-img"
                                src="Images/bootstrap.png"
                                alt="Bootstrap"
                            />
                        </a>
                    </div>
                </div>
            </Row> */}

            {/* Projects */}
            <div className="text-center m-0 project">
                <Row className=" text-center project">
                    <h1 className="proj fw-bold mb-3">Projects </h1>
                </Row>
                <Row className="text-white project pb-3" md={2}>
                    <Col>
                        <a
                            className="PList"
                            href="https://abhinav0115.github.io/Piximage/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Piximage
                        </a>
                    </Col>
                    <Col>
                        <a
                            className="PList"
                            href="https://abhinav0115.github.io/GitRepo/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitRepo
                        </a>
                    </Col>
                    <Col className="">
                        <a
                            className="PList"
                            href="https://abhinav0115.github.io/Random_Quote/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Quote Generator
                        </a>
                    </Col>
                    <Col>
                        <a
                            className="PList"
                            href="https://abhinav0115.github.io/ToDo_App/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Todo App
                        </a>
                    </Col>
                    <Col>
                        <a
                            className="PList"
                            href="https://abhinav0115.github.io/Scientific-Calculator/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Scientific Calculator
                        </a>
                    </Col>
                    <Col>
                        <a
                            className="PList"
                            href="https://abhinav0115.github.io/BMI-Calculator/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            BMI Calculator
                        </a>
                    </Col>
                    <Col>
                        <a
                            className="PList"
                            href="https://abhinav0115.github.io/Basic-Calculator/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Basic Calculator
                        </a>
                    </Col>
                    <Col>
                        <a
                            className="PList"
                            href="https://abhinav0115.github.io/TestYourMemory/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            TestYourMemory
                        </a>
                    </Col>
                    <Col>
                        <a
                            className="PList"
                            href="https://abhinav0115.github.io/Sorting_Visualizer/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sorting Visualizer
                        </a>
                    </Col>
                    <Col>
                        <a
                            className="PList"
                            href="https://abhinav0115.github.io/TicTacToe_Game/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Tic-Tac-Toe Game
                        </a>
                    </Col>
                    <Col>
                        <a
                            className="PList"
                            href="https://github.com/Abhinav0115/Guess-the-Number-Game"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Guess the Number Game
                        </a>
                    </Col>
                    <Col>
                        <a
                            className="PList"
                            href="https://abhinav0115.github.io/Dice-Game/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Dice Game
                        </a>
                    </Col>
                </Row>
            </div>

            {/* Contact */}
            {/* <Row className="text-dark">
                hello
            </Row> */}
        </Container>
    );
}
