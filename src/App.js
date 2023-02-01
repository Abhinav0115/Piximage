import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//react-route
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//toast
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

//firebase
// import firebase from "firebase/app";
// import { getAuth } from "firebase/auth";

//components
import Gallery from "./components/Gallery";
import NotFound from "./components/NotFound";
import About from "./components/About";

//layout
import Footer from "./layout/Footer";
import Header from "./layout/Header";

import "./App.css";

const App = () => {
    return (
        <div className="min-vh-100 w-100">
            {/* <Router basename="/"> */}
                {" "}
                {/* for local host */}
                <Router basename="/Piximage"> {/* for web host */}
                <ToastContainer />
                <Header />
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/"
                        element={<Gallery />}
                        errorElement={<NotFound />}
                    />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
