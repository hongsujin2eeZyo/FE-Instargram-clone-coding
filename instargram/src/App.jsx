import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InstarPage from "./pages/InstarPage";
import DetailPage from "./pages/DetailPage";

import image1 from './assets/1.jpeg';
import image2 from './assets/2.jpeg';
import image3 from './assets/3.jpeg';
import image4 from './assets/4.jpeg';
import image5 from './assets/5.jpeg';
import image6 from './assets/6.jpeg';

const imageData = [
    { id:0, src: image1, description: "📸🎞️🤓", coment: "일본에서찍은" },
    { id:1,src: image2, description: "🌀_🌀;;💦", coment: "갈머하고찍은" },
    { id:2,src: image3, description: "._.", coment: "현지랑블루본즈" },
    { id:3,src: image4, description: "```", coment: "현지랑블루본즈2" },
    { id:4,src: image5, description: "w", coment: "눈사람만들고집가는길에" },
    { id:5,src: image6, description: "⛄️", coment: "언제왜찍었더라" },
];


function App() {
    return (
      <Router>
      <Routes>
          <Route path="/" element={<InstarPage imageData={imageData}/>} />
          <Route path="/photo/:id" element={<DetailPage imageData={imageData}/>} />
      </Routes>
      </Router>
    );
}

export default App