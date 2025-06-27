import React from 'react';
import { useParams } from 'react-router-dom';
import DetailContent from '../components/DetailContent/DetailContent';

const DetailPage = ({ imageData }) => {
    const { id } = useParams(); // URL에서 id를 가져옴
    const photo = imageData[id]; // id를 기반으로 이미지 데이터 가져오기

    return <DetailContent photo={photo} />;
};

export default DetailPage;