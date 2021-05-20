import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />);

    return (
        <div>
            { postsElements}
        </div>
    );
};

export default MyPosts;