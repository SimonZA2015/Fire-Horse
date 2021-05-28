import React, {createRef, useState} from "react";

import  style from './InfoBanner.module.css';

const InfoBanner = (props) => {

    const [editName, setEditName] = useState(false);
    const [editCity, setEditCity] = useState(false);
    const [editAge, setEditAge] = useState(false);

    const inputAge = createRef();
    const inputName = createRef();
    const inputCity = createRef();

    return (
        <div className={style.body}>
            <div className={style.avatar} style={{backgroundImage: 'url(' + props.avatar + ')'}}/>
            <div>
                {editName ? <div>
                    <input placeholder={'Имя'} ref={inputName} />
                    <span
                        onClick={() => {
                            setEditName(false);
                            props.setName(inputName.current.value);
                            }}>{'✔️'}
                    </span>
                </div> : <div style={{ display: 'flex'}}>
                    <h4>{props.name}</h4>
                    <span onClick={() => setEditName(true)}>{'✏️'}</span>
                </div>}
                {editCity ? <div>
                    <input placeholder={'Город'} ref={inputCity} />
                    <span onClick={() => {
                        setEditCity(false);
                        props.setCity(inputCity.current.value);
                    }}>{'✔️'}
                    </span>
                </div> : <div>
                    <span>{props.city}</span>
                    <span onClick={() => setEditCity(true)}>{'✏️'}</span>
                </div>}
                {editAge ? <div>
                    <input placeholder={'Возраст'} ref={inputAge} />
                    <span onClick={() => {
                        setEditAge(false);
                        props.setAge(inputAge.current.value);
                    }}>{'✔️'}
                    </span>
                </div> : <div>
                    <span>{props.age ? props.age + ' year' : 'Возраст не указан'}</span>
                    <span onClick={() => setEditAge (true)}>{'✏️'}</span>
                </div>}
            </div>
        </div>
    )
}

export default InfoBanner;