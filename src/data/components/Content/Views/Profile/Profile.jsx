import React from 'react';

import Banner from "./More/ProfileBanner";
import ProfileInfo from "./More/ProfileInfo";
import ProfilePosts from "./More/ProfilePosts";

import style from "./Profile.module.css";
import {profile} from "../../../../text/images";

const Profile = () => {

    return (
        <div className={style.body}>
            <Banner image={'https://lh3.googleusercontent.com/s_EVPTSbEF-QtqGXDf5CHJgEKViU8EBE4JM8jAMCXVjqG3651ff8Z82o-0weMCzeAYpSatfmMjLWeh4rC4MbWUI4Wk9tJfxVHfALQ8fEyHdg4PbHSK_3CJLDThfHunO2dqJ6pV1irHy6LC2QQLSZcIP88ASgcfXXpAUQcQbQvs6Oihxo54WVDM-XSl0o9vVqTccbZhoMKcOEgujdRtQ9MgiGLHL7GtWg29kAHLAT1ItgurwGLIyBye7IpaxJVHCepMax8xhUqbR7NX_ha7Z8hGvbfmVqQXgE6CASwYLTg9CurKu9uVg70vBokMLwIC6mE8zC6sI3Io2C43KNOsxuxIgJyVEZzgVRttHLqwOfc-G4C6fzyjpm5jfRsIkmY4FyfQFolXMdtaL4UKkw_foP9hhQ8EIQCWInMhC8s-q4i5HtnInt2a5mVBXGjGX5irpx6vo227dGCVBSFXgVtOXWZE_Bs08tXRl-RSgY1LsHuXyx5bcSNPJe58_fErqeTgvUXVr1Qh2TyB23jbawrQzyyDFde8CEwr-y9yoE6byg9GsDMEgMDRXNbwqTdHJykZ6T-zAUIF45_68PoBSbpgh4fKjHmeEJG488e7VARIre9pDbrjq337aFHMqBZgihHT9e3828yrsHujd6PTp0sj9LcOpYD5ON2X6U_ds_jj_vUz5hD9fDHCF3EyqcSdORlAtJ6ONydgRDJo7KC9Nthv-TzwCk=w695-h924-no?authuser=0'} />
            <ProfileInfo name={profile.name} city={profile.city} avatar={profile.image} age={profile.age} />
            <ProfilePosts />
        </div>
    )
}

export default Profile
