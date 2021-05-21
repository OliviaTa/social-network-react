import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {
    const postsElements = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />);

    const newPostElement = React.createRef();

    const addPost = () => {
        props.addPost();
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;