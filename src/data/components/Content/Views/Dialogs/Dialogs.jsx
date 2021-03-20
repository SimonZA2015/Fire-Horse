import React from 'react';
import ItemDialog from "./More/ItemDialog/ItemDialog";

import style from './Dialogs.module.css';
import ItemsChat from "./More/ItemsChat/ItemsChat";
import InputChat from "./More/InputChat/InputChat";

const Dialogs = (props) => {

    return (
        <div className={style.body} >
            <div className={style.dialogs} >
                <ItemDialog id={0} name='Боня' image='https://lh3.googleusercontent.com/LkNJd2RvfapMOgtQpn-eW7JDOh3K7ubazzlfOE32ncrAMNisUAFV4czgxabkD1SBoSH6DlWB54MebUakqcHp_eHqaEN3ZoPl3ARIy1QlXoMY5TnpWsYstQP6mfofO91NLV-DoGbS6_oTan5mmG0TMAesldQ9TIm32EnZE5lPRspo037IzBRt8bi_cbCb_DCrzdCSEdPlT1KzFN-WPPjQ_y5ynY4V_fWHy22ZkLqd6Om9FvwJt2k7ugpWYvv_lFRBenzkYs2QCd_WHUbGnK0ybVnE8TVFxEti7tmb9FzJs0tY139OUlbcvWqVeVrhUKRrWw2_a7NjPsXnXpfKb6B7Z8EPHyuSPu4I72ltI_8Y_XYvAIG6jDZhWr6YaqytVHMfFY6zS9AhhBPGzrx-7GPh526n72vE0xQ3zbLjjNGUo03SxK8pDAm2s7ibWcK4SQMZPlW1FA7VOnthbKzIRKhXwXwyAMXv7V3tJRYNaofoOxlzFALUI086j3bEHHpLjU-KktOh4A73J74Ub0DsfJeKwoCC4LZA1O7QF7dH3cbLmJ4pYW9IAWI3EPN1JXP4MqdOL-W6ML6QIjI7KoROpYkKqanuybXvhw7CaUR9uh5q9EkiFlkVL8g27QD6s0qBGLnuhvf1KfAJauJTYo4T-823I2VRQ_osXPlnbAvk8C4m2vt_0yTa0VKKINkCkgw-IxNDdaxoOaQP08-Iy5P_R5ozxNvL=w639-h851-no?authuser=0' />
                <ItemDialog id={1} name='Анрегор' image='https://lh3.googleusercontent.com/-2e3sEFPTYgZY4qKO-b6hsvwpCUHp4heDNCFVPsTU_iFYfknuc4Z68Fz7vfDH7dIvRKlMvndlk-oHpfDZyrzfJ_9GyHDakVYPN-NAF45oOPsNYEkCPb375WYSdtvOquGRzScLk1OwqzNtfQ0NhFOXbujn9SMPl-AcOpOWD_zksJ4WKJwdZ-v50UGm3j8nXYxK7C4lHzqZ9LZ-f1E1vVyG9dCiHC4X8oC-S_Dp0DtnJ4d8cM9xOkofnFhDpjiEou1PipfmnOnl4I6mSFYBO4PqXiGwYD3PMHKavs4OTMnA1bzIBfSeHM8Rgx-XSYGKE3lalQ4tI4UawLrPqYBumXqs5_DZ-5ZiJW1Jrqe7lBKkQ7ZAwNvMbte-mTWWUxjov4es7wx4WV1ITsuyEC9SCm5H37xL9VyRaGcbc9CPRBH_UidXE9cQzdrk_OkthKdZcwYv8Z7eMFvYXd6z3X6n7UCl3cmzI3ICX_qzdsGWQjHNqdESLsysFkPPr1QS34URENV1XiyKkpb3aCgDq1_2jgdpnbqpVRW-Fk5SdOEdHtxpdq1kXIiNTgnhXtPA2RURYlVU6eFC6XbuYHhzfHaz2qYojUd87VIdIUfXlhdgBYVzLdJ957IVQqYat6qSdIgpCaBzd-4L6ghmcjZAc2fH95xb3nij1Hj9_GyPFHsHxn1mV2piJe3DZG--YLgsS3A4_dRGKtqpsXVQ57_ek_kZklvII_B=w639-h851-no?authuser=0' />
            </div>
            <div className={style.chat} >
                <div className={style.list}>
                    <ItemsChat text={'Привет!'} />
                    <ItemsChat text={'Как дела'} />
                </div>
                <InputChat />
            </div>
        </div>
    )
}

export default Dialogs;