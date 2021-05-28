import React from "react";

import style from './styles/AddPost_Block.module.css';

const AddPost_Block = (props) => {

    let textAddPost = React.createRef();

    const addPost = () => {
        let newPostData = {
            text: textAddPost.current.value,
            user: props.iam,
            komu: props.id,
        };
        props.addPost(newPostData)
    }

    return (
        <div className={style.body}>
            <input defaultValue='' value={props.newPostText} ref={textAddPost} placeholder={'игогокнуть'} />
            <button onClick={addPost} >Add post</button>
        </div>
    )
}

export default AddPost_Block;