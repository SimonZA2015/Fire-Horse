let store = {

    _render: () => {},

    _loginId: 0,

    _profile: [
        {
            image: 'https://cdn.iconscout.com/icon/free/png-512/account-269-866236.png',
            name: 'Неизвестный',
            city: '',
            age: '',
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
            friends: [1],
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
            friends: [1],
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

    _dialog: {
        ids: [],
        list:[
            [],
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
                friends: [1],
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
            [],
        ],
    },

    dispatch(action) {
        switch (action.type) {
            case 'GET-MYPROFILE':
                return this._profile[parseInt(this._loginId)];

            case 'GET-PROFILE':
                return this._profile[parseInt(action.id)];

            case 'GET-PROFILES':
                return this._profile;

            case 'EDIT-PROFILE-AGE':
                this._profile[parseInt(this._loginId)].age = action.data;
                this.render();
                break

            case 'EDIT-PROFILE-NAME':
                if (action.data.length > 5)
                    this._profile[parseInt(this._loginId)].name = action.data;

                this.render();
                break

            case 'EDIT-PROFILE-CITY':
                if (action.data.length > 2) {
                    this._profile[parseInt(this._loginId)].city = action.data;
                }
                this.render();
                break

            case 'ADD-POST':
                let newPost = {
                    text: action.data.text,
                    likes: [],
                    user: action.data.user,
                };
                debugger
                this._profile[action.data.komu].posts.push(newPost);
                this._profile[action.data.komu].postEdit[action.data.user] = '';
                this.render();
                break

            case 'EDIT-POST':
                this._profile[action.id].postEdit[action.num] = action.data.text;
                this.render();
                break

            case 'LIKE-POST':
                debugger
                if (action.data.idPost > -1 &&  this._profile[action.data.idAthor].posts[action.data.idPost].likes.includes(action.data.idUser)) {
                    let index = this._profile[action.data.idAthor].posts[action.data.idPost].likes.indexOf(action.data.idUser);
                    if (index > -1) {
                        this._profile[action.data.idAthor].posts[action.data.idPost].likes.splice(index, 1);
                    }
                }else {
                    this._profile[action.data.idAthor].posts[action.data.idPost].likes.push(action.data.idUser);
                }
                this.render();
                break

            case "GET-LOGIN":
                return this._loginId;

            case 'SETLOGIN-LOGIN':
                try {
                    if (this._profile[action.login].pass === action.pass) {
                        this._loginId = action.login;
                        this.render();
                        return true
                    }else {
                        return false
                    }
                }catch {
                    alert('Ошибка при входе')
                    return false
                }

            case 'LOGOUT':
                this._loginId = 0;
                this.render();
                break

            case 'GET-MESSAGES':
                return this._dialog.list[this._loginId];

            case 'ADD-MESSAGEITEM':
                let messagesData = {
                    ot: action.data.ot,
                    text: action.data.text,
                }

                this._dialog.list[action.data.ot][action.data.komu].messages.push(messagesData)
                this.render();
                break


            default:
                break
        }


    },

    subscribe(observer) {
        //привязываю обсервер, чтобы могла база обновлять экран
        this._render = observer;
        observer()
    },

    render() {
        this._render()
    },

};

window.store = store;


export default store;