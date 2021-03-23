import React from "react";

import style from './styles/AddPost_Block.module.css';

const AddPost_Block = () => {

    return (
        <div className={style.body}>
            <input placeholder={'игогокнуть'} />
            <button >Add post</button>
        </div>
    )
}

export default AddPost_Block;