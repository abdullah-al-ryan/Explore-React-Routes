import React from 'react';
import './Post.css';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <p>{title}</p>
            <p><small>{body}</small></p>
            {/* navigate way-1 */}
            <Link to={`/post/${id}`}>Visit: {id}</Link>

            {/* navigate way-2 */}
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>

            {/* navigate way-3 */}
            <button onClick={handleNavigate}>Show Details: 2</button>
        </div>
    );
};

export default Post;