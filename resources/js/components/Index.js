import React from "react";
import ReactDOM from "react-dom";
import Home from "../pages/Home";

function Index() {
    return (
        <div className="IndexContainer">
            <Home />
        </div>
    );
}

export default Index;

if (document.getElementById("root")) {
    ReactDOM.render(<Index />, document.getElementById("root"));
}
