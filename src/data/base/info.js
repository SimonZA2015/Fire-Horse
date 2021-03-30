let store = {
    _render: () => {},
    _profile: [
        {
            image: 'https://lh3.googleusercontent.com/pw/ACtC-3c5_klG9Jc_ipQP89e-KBgqd6NBWh4CxWS8yoglUE9o6JLl4Qh3f8NeBlriMmsvt5vFV2YvG32IeeerX6gdZ4jVWMymyXcgCODiu-NOTcqXTRWWpWH986eKCB2xet-QO5BsnvtxcvYJtf2G0Du89YBbmQ=w740-h924-no?authuser=0',
            name: 'Лейпциг',
            city: 'Воронеж',
            banner: 'https://lh3.googleusercontent.com/pw/ACtC-3edWXjRuYD34Uak6YpY7JXqMUEeFQrGHfutOgi_Ky7m65BYyGMAAEBo3Nzum_si5hVkGYAJmmgwTTVdm-uoweRSw99usZ4llq5Jy0QNCzEck4lD6FJI1z8U3WvLxGs-EpRU9lbMBIWy8lH_w-bneQNGxA=w1404-h425-no?authuser=0',
            friends: [1, 2],
            postEdit: ['я провел норм день',],
            posts: [
                {
                    text: 'Сегодня был в полях, было оченб классно!',
                    likes: [0, 2, 5],
                    user: 0
                },
                {
                    text: 'Что там было?',
                    likes: [],
                    user: 1,
                },
            ]
        },
        {
            image: 'https://lh3.googleusercontent.com/pw/ACtC-3fA-5Rv-7qZMrRjTqe9yi35C98TalnUOnIL5qTevnHDkRhB4JxqXlnVWwFIK0jbq9gFvYGRrih7FFM1tGo1JwYNbUZomchVvjQLsVLH-u3Owxsz3aZNnAfxgWWxbEtL0lstKyTpXYdpEzKfPT5LeKLPjA=w695-h924-no?authuser=0',
            name: 'Боня',
            banner: 'https://lh3.googleusercontent.com/pw/ACtC-3dXQaju4hPP9rL2QCH97fa-qJr8jZm9c7WO6ulwuu39d3HosKM5NsJjv2MsaEcc7yIkIwK9uLw697KDBWPwNpgJlYgLMv2SOqqM1oZNC_7yz3sPaFWNM4QnqhSDvq2frWUsWbE98qqhKcHR8ypLJcSkBg=s828-no?authuser=0',
            city: 'Москва',
            postEdit: [],
            posts: [
                {
                    text: 'Что-то тут',
                    likes: [0,],
                    user: 1
                },
            ]
        },
        {
            image: 'https://lh3.googleusercontent.com/pw/ACtC-3cQjntN15cR7ezvASABTqmmG8WKcBLaeWDBktyXgSuEP4IBxqk9FMy1XwF2lT16m8kdQKEWzTMxNjCjEqN0uSjsh-cJdd34QT77dxLHM_WdBsKVb45BiKvZ8nd1AkE_3cZe6AtC9gZFuXQNk69xbjfn0Q=w521-h924-no?authuser=0',
            name: 'Эгрегор',
            city: 'Москва',
            postEdit: [],
            posts: [
                {
                    text: 'еее',
                    likes: [],
                    user: 2
                },
                {
                    text: 'пууу',
                    likes: [],
                    user: 2
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

    _dialog: [[
        {
            name: 'Боня',
            id: '1',
            messages: [
                {
                    ot: '0',
                    text: 'Привет!',
                },
                {
                    ot: '1',
                    text: 'Хорошо, ты как',
                }
            ]
        },
        {
            name: 'Агрегор',
            id: '2',
            messages: [
                {
                    ot: '2',
                    text: 'Привет, что делаешь?',
                },
                {
                    ot: '0',
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

    subscribe(observer) {
        this._render = observer;
        observer()
    },

    render() {
        this._render()
    }

};

window.store = store;


export default store;