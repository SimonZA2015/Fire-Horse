import React from "react";

import style from './styles/AddPost_Block.module.css';

const AddPost_Block = (props) => {
    let textAddPost = React.createRef();

    const onChangeEditPost = () => {
        let data = {
            iam: props.iam,
            id: props.id,
            text: textAddPost.current.value,
        };

        props.editPostText(data);
    }

    const showText = () => {
        let newPostData = {
            text: textAddPost.current.value,
            user: props.iam,
            komu: props.id,
        };
        props.addPost(newPostData)
    }

    return (
        <div className={style.body}>
            <input defaultValue='' value={props.newPostText} onChange={onChangeEditPost} ref={textAddPost} placeholder={'игогокнуть'} />
            <button onClick={showText} >Add post</button>
        </div>
    )
}

export default AddPost_Block;