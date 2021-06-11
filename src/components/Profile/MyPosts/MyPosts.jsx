import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
import Post from './Post/Post';

const MyPosts = (props) => {
    const postsElements = props.state.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />);

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    const onPostChange = (event) => {
        const text = event.currentTarget.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea onChange={onPostChange} value={props.state.newPostText} />
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