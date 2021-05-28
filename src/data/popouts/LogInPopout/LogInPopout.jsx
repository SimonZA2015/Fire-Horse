import React, {createRef} from "react";

import style from './LogInPopout.module.css';

const LogInPopout = (props) => {

    const loginInput = createRef();
    const passwordInput = createRef();

    return (<div>
        {props.idLogin ?  false : <div className={style.bg}>
            <div className={style.body}>
                <div><input className={style.inputs} ref={loginInput} placeholder={'Login'} /></div>
                <div><input className={style.inputs} type={'password'} ref={passwordInput}  placeholder={'Password'}/></div>
                <h4
                    id={'GoButton'}
                    onClick={() => {
                        if (!props.logIn(loginInput.current.value, passwordInput.current.value)) {
                                document.getElementById('GoButton').style.backgroundColor = 'red'
                            }
                        }
                    }
                >{"->"}</h4>
            </div>
        </div>}
    </div>
    )
}

export default LogInPopout;