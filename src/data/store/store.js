let store = {

    _render: () => {},

    _loginId: 0,

    _profile: [
        {
            image: 'https://cdn.iconscout.com/icon/free/png-512/account-269-866236.png',
            name: 'Неизвестный',
            city: '',
            banner: 'https://lh3.googleusercontent.com/pw/ACtC-3edWXjRuYD34Uak6YpY7JXqMUEeFQrGHfutOgi_Ky7m65BYyGMAAEBo3Nzum_si5hVkGYAJmmgwTTVdm-uoweRSw99usZ4llq5Jy0QNCzEck4lD6FJI1z8U3WvLxGs-EpRU9lbMBIWy8lH_w-bneQNGxA=w1404-h425-no?authuser=0',
            friends: [],
            postEdit: [],
            posts: []
        },
        {
            image: 'https://lh3.googleusercontent.com/pw/ACtC-3c5_klG9Jc_ipQP89e-KBgqd6NBWh4CxWS8yoglUE9o6JLl4Qh3f8NeBlriMmsvt5vFV2YvG32IeeerX6gdZ4jVWMymyXcgCODiu-NOTcqXTRWWpWH986eKCB2xet-QO5BsnvtxcvYJtf2G0Du89YBbmQ=w740-h924-no?authuser=0',
            name: 'Магнум',
            city: 'Воронеж',
            pass: 'Ass',
            banner: 'https://lh3.googleusercontent.com/pw/ACtC-3edWXjRuYD34Uak6YpY7JXqMUEeFQrGHfutOgi_Ky7m65BYyGMAAEBo3Nzum_si5hVkGYAJmmgwTTVdm-uoweRSw99usZ4llq5Jy0QNCzEck4lD6FJI1z8U3WvLxGs-EpRU9lbMBIWy8lH_w-bneQNGxA=w1404-h425-no?authuser=0',
            friends: [2, 3],
            postEdit: ['я провел норм день',],
            posts: [
                {
                    text: 'Сегодня был в полях, было оченб классно!',
                    likes: [1, 2, 3],
                    user: 1
                },
                {
                    text: 'Что там было?',
                    likes: [],
                    user: 2,
                },
            ]
        },
        {
            image: 'https://lh3.googleusercontent.com/pw/ACtC-3fA-5Rv-7qZMrRjTqe9yi35C98TalnUOnIL5qTevnHDkRhB4JxqXlnVWwFIK0jbq9gFvYGRrih7FFM1tGo1JwYNbUZomchVvjQLsVLH-u3Owxsz3aZNnAfxgWWxbEtL0lstKyTpXYdpEzKfPT5LeKLPjA=w695-h924-no?authuser=0',
            name: 'Боня',
            banner: 'https://lh3.googleusercontent.com/pw/ACtC-3dXQaju4hPP9rL2QCH97fa-qJr8jZm9c7WO6ulwuu39d3HosKM5NsJjv2MsaEcc7yIkIwK9uLw697KDBWPwNpgJlYgLMv2SOqqM1oZNC_7yz3sPaFWNM4QnqhSDvq2frWUsWbE98qqhKcHR8ypLJcSkBg=s828-no?authuser=0',
            city: 'Москва',
            pass: 'Dii',
            friends: [],
            postEdit: [],
            posts: [
                {
                    text: 'Что-то тут',
                    likes: [1,],
                    user: 2
                },
            ]
        },
        {
            image: 'https://lh3.googleusercontent.com/pw/ACtC-3cQjntN15cR7ezvASABTqmmG8WKcBLaeWDBktyXgSuEP4IBxqk9FMy1XwF2lT16m8kdQKEWzTMxNjCjEqN0uSjsh-cJdd34QT77dxLHM_WdBsKVb45BiKvZ8nd1AkE_3cZe6AtC9gZFuXQNk69xbjfn0Q=w521-h924-no?authuser=0',
            name: 'Эгрегор',
            city: 'Москва',
            pass: 'sasib',
            friends: [],
            postEdit: [],
            posts: [
                {
                    text: 'еее',
                    likes: [],
                    user: 3
                },
                {
                    text: 'пууу',
                    likes: [],
                    user: 3
                },
            ]
        }
    ],
    getProfile(id) {
        return this._profile[id];
    },
    getProfiles() {
        return this._profile;
    },
    addPost(props) {
        let newPost = {
            text: props.text,
            likes: [],
            user: props.user,
        };
        debugger

        this._profile[props.komu].posts.push(newPost);
        this._profile[props.komu].postEdit[props.user] = '';

        this.render();
    },
    editPostText(props) {
        this._profile[props.id].postEdit[props.iam] = props.text;

        this.render();
    },
    getLoginLogIn() {
        return this._loginId;
    },
    setLoginLogIn(login, pass) {
        try {
            if (this._profile[login].pass === pass) {
                this._loginId = login;
                this.render();
            }
        }catch {}
    },
    logoutLogin() {
        this._loginId = 0;
        this.render();
    },

    _dialog: [[],
        [
        {
            name: 'Боня',
            id: '2',
            messages: [
                {
                    ot: '1',
                    text: 'Привет!',
                },
                {
                    ot: '2',
                    text: 'Хорошо, ты как',
                }
            ]
        },
        {
            name: 'Агрегор',
            id: '3',
            messages: [
                {
                    ot: '3',
                    text: 'Привет, что делаешь?',
                },
                {
                    ot: '1',
                    text: 'Хорошо, на тренинге',
                }
            ]
        },
    ],
        []
    ],
    getMessages(id) {
        return this._dialog[id]
    },
    addMessagesItem(props) {
        let messagesData = {
            ot: props.ot,
            text: props.text,
        }

        this._dialog[props.ot][props.komu].messages.push(messagesData)
        this.render();
    },

    setAgeProfile(id, int) {
        this._profile[id].age = int;
        this.render();
    },

    setNameProfile(id, name) {
        if (name.length > 5)
            this._profile[id].name = name;
            this.render();
    },

    likePost(idPost, idAthor, idUser) {
        debugger
        if (idPost > -1 &&  this._profile[idAthor].posts[idPost].likes.includes(idUser)) {
            let index = this._profile[idAthor].posts[idPost].likes.indexOf(idUser);
            if (index > -1) {
                this._profile[idAthor].posts[idPost].likes.splice(index, 1);
            }
        }else {
            this._profile[idAthor].posts[idPost].likes.push(idUser);
        }
        this.render();
    },

    setCityProfile(id, city) {
        
        if (city.length > 2) {
            this._profile[id].city = city;
            this.render();

        }
    },

    subscribe(observer) {
        //привязываю обсервер, чтобы могла база обговлять экран
        this._render = observer;
        observer()
    },

    render() {
        this._render()
    },

};

window.store = store;


export default store;