import React from "react";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";


const InstarPage = ({ imageData }) => {
    return (
        <div>
            <Header />
            <Body imageData={imageData} />
        </div>
    );
};

export default InstarPage;