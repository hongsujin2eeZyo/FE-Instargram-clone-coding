import React from 'react';
import { useState } from 'react';

import './DetailContent.css';

const DetailContent = ({ photo }) => {
    const [comments, setComments] = useState([]); // 댓글 목록 상태
    const [newComment, setNewComment] = useState(""); // 새로운 댓글 입력 상태

    const handleAddComment = () => {
        if (newComment.trim() !== "") {
            setComments([...comments, newComment]); // 댓글 추가
            setNewComment(""); // 입력 필드 초기화
        }
    };
    const handleDeleteComment = (index) => {
        const updatedComments = comments.filter((_, i) => i !== index); // 해당 댓글 삭제
        setComments(updatedComments);
    };
    return (
        <div className="detail-page">
            <p className="detail-description">{photo.description}</p>
            <p className="detail-coment">{photo.coment}</p>
            <img src={photo.src} alt="Detail" className="detail-image" />
            
            <div className="comment-count">
                <p>댓글 갯수: {comments.length}</p>
            </div>


            <div className="comment-section">
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)} // 입력 상태 업데이트
                    placeholder="댓글을 입력하세요..."
                    className="comment-input"
                />
                <button onClick={handleAddComment} className="comment-button">
                    댓글 추가
                </button>
            </div>
            <div className="comments-list">
                {comments.map((comment, index) => (

                    <div key={index} className="comment-item">
                        <p>익명 : {comment}</p>
                        <button
                            onClick={() => handleDeleteComment(index)} // 삭제 버튼 클릭 시 해당 댓글 삭제
                            className="delete-button"
                        >
                            삭제
                        </button>
                    </div>
                    
                ))}
            </div>

            
        </div>
    );
};

export default DetailContent;