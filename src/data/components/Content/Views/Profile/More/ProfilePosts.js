import React from 'react';
import AddPost_Block from "./AddPost_Block";
import ItemPost from "./ItemPost";

const ProfilePosts = () => {

    return (
        <div>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <AddPost_Block />
            <ItemPost likes={2} text='post1' avatar='https://lh3.googleusercontent.com/3f2DbSCgnR0PVPGdnhyBjd2QvCJGqUvLZgxEi080VgLwUzcV9QCoIPIAAblSkyN8sXWLjD9gLdM0_TCrfJWVQf69hLWHgjR60yB9y-rTGt1YIzQh7Am_iUOwss_lFo9Q68FifWigmTyVcWLkoFzuAbX62VpZ97yK8y5NO_RCT_CsxNpCalbcg4qJ0yqpZ37qhdNloP59Z-S9WMYwOgjkZ9_4Wft7JuNZqmvubAAfAc6i-MEec_KhPmY0x944UitBnRIkvEJhKtLfi7bIWv3KOd0tuhE9iKgKPyc09DG_EHGMJNROK0e8nNrYqVDFs-HQipoDoCXk3yj_RFOp_4SwWcQrqD8OXr04VaxWDwxAZCwVrHKnHU2g3f5uIB7hOuGL3m7oZ-A73GskG-bo6_Ltpa2jHMfs409obKK6sxfxVLGcyjk-rBW3H3hQ6gEJB4VwJjkdtRNxsSvSIVL6n0G5nQXk5-RK4picAcyAhbE4a4G2J7mduZxLQM3mZCkY1VUi7ndI8FBdV6WZst1pXyOribi_YGaJUZnWhfcWxMQ3lJqYtBVtOscFzZuzEdfGKW24nihoP3eR0N4bxFVd6DAp5aTqFvSZb5j76TiiB_WzV-uEJhFfKQW2q4sflNv9Noqk9BFbA4zxKNJbGkQFSucf34-Q-vhh_SkL3Ush7cP4EEoHq2xlShRB0FYDe2y5EXLrD2DrjGwvU9L0TqWzQsMb7EsO=w695-h924-no?authuser=0' />
        </div>
    )
}

export default ProfilePosts;