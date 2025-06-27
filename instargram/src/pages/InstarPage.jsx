import React from "react";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";

import image1 from '../assets/1.jpeg';
import image2 from '../assets/2.jpeg';
import image3 from '../assets/3.jpeg';
import image4 from '../assets/4.jpeg';
import image5 from '../assets/5.jpeg';
import image6 from '../assets/6.jpeg';

const imageData = [
    { src: image1, description: "📸🎞️🤓", coment: "일본에서찍은" },
    { src: image2, description: "🌀_🌀;;💦", coment: "갈머하고찍은" },
    { src: image3, description: "._.", coment: "현지랑블루본즈" },
    { src: image4, description: "```", coment: "현지랑블루본즈2" },
    { src: image5, description: "w", coment: "눈사람만들고집가는길에" },
    { src: image6, description: "⛄️", coment: "언제왜찍었더라" },
];

const InstarPage = () => {
    return (
        <div>
            <Header />
            <Body imageData={imageData} />
        </div>
    );
};

export default InstarPage;