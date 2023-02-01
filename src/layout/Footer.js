import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
    return (
        <Container
            fluid
            tag="footer"
            className="text-center m-0 HeadFootBG text-white text-uppercase fixed-bottom p-2 pb-0"
        >
            <div className="mb-1">
                <a href="https://www.linkedin.com/in/abhinav0115/">
                    <img
                        className="FooterLogo bg-white rounded me-3"
                        src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                        alt="Linkedin"
                    />
                </a>
                <a href="https://github.com/Abhinav0115/">
                    <img
                        className="FooterLogo bg-white rounded"
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        alt="Github"
                    />
                </a>
            </div>
            <span className="text-warning fw-bold">&#169; PEXimage</span> Image
            Search App build using{" "}
            <span className="text-warning ">PEXELS API</span>
        </Container>
    );
};

export default Footer;
