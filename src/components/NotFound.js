import React from "react";

export default function NotFound() {
    return (
        <div id="error-page" className="UncompletePage text-white text-center">
            <h1>Oops!</h1>
            <h5>Sorry, an unexpected error has occurred.</h5>
            <h5>Page not Found.</h5>
            {/* <p>
                <i>{error.status + " " + error.statusText || error.message}</i>
            </p> */}
        </div>
    );
}
