import React from "react";
import like0 from '../../../../../../media/like0.png';
import like1 from '../../../../../../media/like1.png';

import style from './LikeItem.module.css';

const LikeItem = (props) => {

    if (props.count.includes(props.idLogin)) {
        return (
            <div className={style.body}>
                <img onClick={props.onLike} src={like1} alt={'liked'} />
            </div>
        )
    }else {
        return (
            <div className={style.body}>
                <img onClick={props.onLike} src={like0} alt={'not like'}/>
            </div>
        )
    }

};

export default LikeItem;