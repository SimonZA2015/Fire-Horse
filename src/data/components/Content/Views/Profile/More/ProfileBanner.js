import style from "./styles/ProfileBanner.module.css";

const BannerProfile = (props) => {

    return (
        <div>
            {/* eslint-disable-next-line no-mixed-operators */}
            {props.image && <img className={style.body} src={props.image} alt='' /> || <img className={style.body} src={'https://lh4.googleusercontent.com/Ah373Sal-G49mh9blBpx84ruqmxzw5KIeoRRJ24qgMEmmACBMXotNuVcM8a-MYRvbdDZYY16XeVhyx7AI6dH=w1558-h924-rw'} alt=''/>}
        </div>
    )
}

export default BannerProfile;