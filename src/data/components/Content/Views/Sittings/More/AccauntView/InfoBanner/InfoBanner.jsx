import React, {createRef, useState} from "react";

import  style from './InfoBanner.module.css';

const InfoBanner = (props) => {

    const [editName, setEditName] = useState(false);
    const [editCity, setEditCity] = useState(false);
    const [editAge, setEditAge] = useState(false);
    const [infoName, setInfoName] = useState(props.name);
    const [infoCity, setInfoCity] = useState(props.city);
    const [infoAge, setInfoAge] = useState(props.age);

    const updateInfo = () => {
        setInfoName(props.name);
        setInfoCity(props.city);
        setInfoAge(props.age);
        debugger
    }

    const inputAge = createRef()
    return (
        <div className={style.body}>
            <div className={style.avatar} style={{backgroundImage: 'url(' + props.avatar + ')'}}/>
            <div>
                {editName ? <div><input placeholder={'Имя'}/><span onClick={() => setEditName(false)}>{'✔️'}</span></div> : <div style={{ display: 'flex'}}><h4>{infoName}</h4><span onClick={() => setEditName(true)}>{'✏️'}</span></div>}
                {editCity ? <div><input placeholder={'Город'}/><span onClick={() => setEditCity(false)}>{'✔️'}</span></div> : <div><span>{infoCity}</span><span onClick={() => setEditCity(true)}>{'✏️'}</span></div>}
                {editAge ? <div><input placeholder={'Возраст'} ref={inputAge} /><span onClick={() => {setEditAge(false); props.setAge(props.id, inputAge.current.value); updateInfo()}}>{'✔️'}</span></div> : <div><span>{infoAge ? infoAge + ' year' : 'Возраст не указан'}</span><span onClick={() => setEditAge (true)}>{'✏️'}</span></div>}
            </div>
        </div>
    )
}

export default InfoBanner;