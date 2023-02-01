/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
} from "reactstrap";

import { Link } from "react-router-dom";

import logos from "./logo.png";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const toggledropdown = () => setIsOpenDropdown(!isOpenDropdown);

    return (
        <div className="sticky-top">
            <Navbar
                color="warning"
                light
                expand="md"
                className="p-0 mb-4 HeadFootBG"
            >
                <NavbarBrand>
                    <Link to="/">
                        <div className="logo m-1 mb-0 mt-0 text-uppercase">
                            <img src={logos} className="App-logo" alt="logo" />
                            PiXimage
                        </div>
                    </Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} className=" bg-light" />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <Dropdown
                                toggle={toggledropdown}
                                isOpen={isOpenDropdown}
                            >
                                <DropdownToggle
                                    caret
                                    className="bg-transparent border-0 align-text-top ps-0"
                                >
                                    Other Projects
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        <a
                                            className="text-dark"
                                            href="https://abhinav0115.github.io/Random_Quote/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Quote Generator
                                        </a>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <a
                                            className="text-dark"
                                            href="https://abhinav0115.github.io/GitRepo/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            GitRepo
                                        </a>
                                    </DropdownItem>

                                    <DropdownItem>
                                        <a
                                            className="text-dark"
                                            href="https://abhinav0115.github.io/ToDo_App/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Todo App
                                        </a>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <a
                                            className="text-dark"
                                            href="https://abhinav0115.github.io/TicTacToe_Game/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            TicTacToe Game
                                        </a>
                                    </DropdownItem>

                                    <UncontrolledDropdown direction="right">
                                        <DropdownToggle
                                            caret
                                            className="bg-transparent w-100 text-start ps-3 border-0 text-dark"
                                        >
                                            Calculator
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>
                                                <a
                                                    className="text-dark"
                                                    href="https://abhinav0115.github.io/Basic-Calculator/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Basic Calculator
                                                </a>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <a
                                                    className="text-dark"
                                                    href="https://abhinav0115.github.io/BMI-Calculator/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    BMI Calculator
                                                </a>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <a
                                                    className="text-dark"
                                                    href="https://abhinav0115.github.io/Scientific-Calculator/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Scientific Calculator
                                                </a>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                    <DropdownItem>
                                        <a
                                            className="text-dark"
                                            href="https://abhinav0115.github.io/Sorting_Visualizer/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Sorting Visualizer
                                        </a>
                                    </DropdownItem>

                                    <DropdownItem>
                                        <a
                                            className="text-dark"
                                            href="https://abhinav0115.github.io/TestYourMemory/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            TestYourMemory
                                        </a>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                        <NavItem className="mt-2 me-3 ms-2">
                            <Link className=" text-white" to="/about">
                                About
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
