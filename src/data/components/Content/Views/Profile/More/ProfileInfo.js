import style from "./styles/ProfileInfo.module.css";
import ButtonsBlock from "./ButtonsBlock";

const ProfileInfo = (props) => {

    return (
        <div className={style.body}>
            <img src={props.avatar} alt='' />
            <div className={style.infoBlock} >
                <h4>{props.name}</h4>
                {/* eslint-disable-next-line no-mixed-operators */}
                <div>{props.city && <span>Город: {props.city}</span> || <span>Город: неуказано</span>}</div>
                {/* eslint-disable-next-line no-mixed-operators */}
                <div>{props.age && <span>Возраст: {props.age}</span> || <span>Возраст: не указан</span>}</div>
                <ButtonsBlock id={props.id} iam={props.iam} />
            </div>
        </div>
    )
}

export default ProfileInfo;