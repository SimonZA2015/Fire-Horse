import React, {createRef} from "react";

import style from './LogoutPopout.module.css';

const LogoutPopout = (props) => {

    const loginInput = createRef();
    const passwordInput = createRef();

    return (<div>
        {props.idLogin ?  false : <div className={style.bg}>
            <div className={style.body}>
                <div><input className={style.inputs} ref={loginInput} placeholder={'Login'} /></div>
                <div><input className={style.inputs} type={'password'} ref={passwordInput}  placeholder={'Password'}/></div>
                <h4 onClick={() => {props.logIn(loginInput.current.value, passwordInput.current.value)}}>{"->"}</h4>
            </div>
        </div>}
    </div>
    )
}

export default LogoutPopout;