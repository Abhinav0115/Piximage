/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import { FaSearch } from "react-icons/fa";

export default function Gallery() {
    const [query, setQuery] = useState("Car");
    const [loading, setLoading] = useState(true);

    const [photos, setPhotos] = useState([]);

    const [data, setData] = useState([]);

    //local API -> https://mocki.io/v1/a589a206-0cfb-478d-a854-4b326cfff704
    // const localurl = "https://mocki.io/v1/fda7a74d-3d06-41a0-a45c-a7d3f8f9b728";

    const apiKey = "563492ad6f91700001000001b6afffe3e1d7466eb96ede29e74662d1";

    const getPhotos = async (type) => {
        //local url
        // let url = "https://mocki.io/v1/fda7a74d-3d06-41a0-a45c-a7d3f8f9b728";

        //API URL
        let url = `https://api.pexels.com/v1/search?query=${query}&per_page=15`;

        if (data?.next_page && type === "next") {
            url = data.next_page;
        }
        if (data?.prev_page && type === "back") {
            url = data?.prev_page;
        }

        setLoading(true);
        await fetch(url, {
            headers: {
                Authorization: apiKey,
            },
        })
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                setLoading(false);
                setData(data);
                setPhotos(data.photos);
            });
    };

    useEffect(() => {
        getPhotos();
    }, []);

    const onKeyDownHandler = (e) => {
        if (e.keyCode === 13) {
            getPhotos();
        }
    };
    const onSearchClick = (e) => {
        getPhotos();
    };

    const onImgClicked = () => {};

    return (
        <Container className="HomeBG">
            <Row className="mt-1 mb-2 input-icon">
                <i>
                    <FaSearch className="icon" />
                </i>
                <input
                    className="inputSearch text-white col-10 bg-transparent text-capitalize "
                    onKeyDown={onKeyDownHandler}
                    placeholder="Search photos"
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                />
                <button
                    className="col rounded text-dark btnH my-auto text-capitalize h4"
                    type="submit"
                    onClick={onSearchClick}
                    value={query}
                >
                    Search
                </button>
            </Row>
            <Row className="mx-auto">
                {loading && <h1 className="mx-auto">Loading...</h1>}
            </Row>
            <Row className=" mx-auto mt-4" hidden={loading === true}>
                {photos?.map((item, index) => {
                    return (
                        <Col md={4} className=" mt-0 rounded" key={index}>
                            <img
                                className="rounded h-75 w-100"
                                src={item.src.large}
                                alt={item.id}
                                onClick={() => console.log("clicked")}
                            />
                            <h5 className=" text-center text-light mt-2">
                                Photo by:{" "}
                                <span className="text-warning">
                                    {item.photographer}
                                </span>{" "}
                            </h5>
                        </Col>
                    );
                })}
            </Row>
            <Row className="mx-auto  mb-3 " hidden={loading === true}>
                <button
                    className="col-2 mx-auto rounded btnBottom btnH border h5 text-capitalize"
                    disabled={data?.page === 1}
                    onClick={() => getPhotos("back")}
                >
                    Previous
                </button>
                <button
                    className="col-2 mx-auto rounded btnBottom btnH border h5 text-capitalize"
                    disabled={data?.page === 5}
                    onClick={() => getPhotos("next")}
                >
                    Next
                </button>
            </Row>
        </Container>
    );
}
