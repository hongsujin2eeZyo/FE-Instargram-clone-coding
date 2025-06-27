import React, { useState, useEffect } from 'react';
import './DetailContent.css';

const DetailContent = ({ postId }) => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const API_URL = "https://rxlahlpuscpdneaxdrrk.functions.supabase.co";
  const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4bGFobHB1c2NwZG5lYXhkcnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MDczODYsImV4cCI6MjA2Mzk4MzM4Nn0.yyyRqGoCtrPjdCjSsxp4_vfNkAJ54PYxxfklB5ISpOQ";

  // 게시글 불러오기
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${API_URL}/posts`, {
          headers: {
            apikey: API_KEY,
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();

        const numericPostId = Number(postId);
        const selectedPost = data.find(post => post.id === numericPostId);

        if (selectedPost) setPost(selectedPost);
        else {
          console.error("해당 게시글 없음");
          setPost(null);
        }
      } catch (error) {
        console.error("게시글 불러오기 실패:", error);
        setPost(null);
      }
    };
    fetchPost();
  }, [postId]);

  // 댓글 불러오기
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`${API_URL}/comments/${postId}`, {
          headers: {
            apikey: API_KEY,
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("댓글 불러오기 실패:", error);
      }
    };
    fetchComments();
  }, [postId]);

  // 댓글 작성
  const handleAddComment = async () => {
    if (newComment.trim() === "") return;

    try {
      const response = await fetch(`${API_URL}/comments/${postId}`, {
        method: "POST",
        headers: {
          apikey: API_KEY,
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newComment }),
      });

      if (response.ok) {
        const newCommentData = await response.json();
        setComments([...comments, newCommentData]);
        setNewComment("");
      } else {
        console.error("댓글 작성 실패:", response.statusText);
      }
    } catch (error) {
      console.error("댓글 작성 실패:", error);
    }
  };

  // 댓글 삭제
  const handleDeleteComment = async (commentId) => {
    try {
      const response = await fetch(`${API_URL}/comments/${postId}?comment_id=${commentId}`, {
        method: "DELETE",
        headers: {
          apikey: API_KEY,
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setComments(comments.filter((comment) => comment.id !== commentId));
      } else {
        console.error("댓글 삭제 실패:", response.statusText);
      }
    } catch (error) {
      console.error("댓글 삭제 실패:", error);
    }
  };

  if (!post) return <p>로딩 중...</p>;

  return (
    <div className="detail-page">
      <h2 className="detail-title">{post.title}</h2>
      <p className="detail-content">{post.content}</p>
      <img src={post.image_url} alt={post.title} className="detail-image" />

      <div className="comment-count">
        <p>댓글 갯수: {comments.length}</p>
      </div>

      <div className="comment-section">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="댓글을 입력하세요..."
          className="comment-input"
        />
        <button onClick={handleAddComment} className="comment-button">
          댓글 추가
        </button>
      </div>

      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <p>익명 : {comment.content}</p>
            <button
              onClick={() => handleDeleteComment(comment.id)}
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
