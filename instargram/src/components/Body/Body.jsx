import React from 'react';
import { useNavigate } from "react-router-dom";
import './Body.css'; 

const Body = ({ imageData }) => {
    const navigate = useNavigate();

    return (
        <div className="body-container">
            <div className="image-grid">
                {imageData.map((image, index) => (
                    <div 
                        key={index} 
                        className="image-item"
                        onClick={() => navigate(`/photo/${index}`)} 
                    >
                        <img src={image.src} alt={`Image ${index + 1}`} />
                        <p className="image-description">{image.description}</p>
                        <p className="image-coment">{image.coment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Body;