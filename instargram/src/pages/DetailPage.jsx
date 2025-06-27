import React from 'react';
import { useParams } from 'react-router-dom';
import DetailContent from '../components/DetailContent/DetailContent';

const DetailPage = ({ imageData }) => {
    const { id } = useParams();
    const photoIndex = parseInt(id, 10);

    const photo = imageData[photoIndex];

  
   
  

    return <DetailContent photo={photo} postId={photoIndex} />;
};
export default DetailPage;