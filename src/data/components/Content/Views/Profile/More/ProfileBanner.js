import style from "../Profile.module.css";

const BannerProfile = (props) => {

    return (
        <div>
            {/* eslint-disable-next-line no-mixed-operators */}
            {props.image && <img className={style.banner} src={props.image} alt='' /> || <img className={style.banner} src={'https://lh5.googleusercontent.com/eKykbubSVVFUehwLHHG8HJo5Gf-hneH35IU3iavkMp0s7OvNu8mVks3hiqJEJWiadsdjr4WriUkW_PJurwjq=w1920-h924-rw'} alt=''/>}
        </div>
    )
}

export default BannerProfile;