import React from "react";

const profileReducer = (state, action) => {

    switch (action.type) {
        case 'EDIT-PROFILE-AGE':
            //set old profile
            state._profile[parseInt(this._loginId)].age = action.data;
            break

        case 'GET-MYPROFILE':
            //send list info your profile
            return state._profile[parseInt(this._loginId)];

        case 'GET-PROFILE':
            //send list info witch index profile
            return state._profile[parseInt(action.id)];

        case 'GET-PROFILES':
            //send list info witch all profiles
            return state._profile;

        case 'EDIT-PROFILE-NAME':
            //set name profile
            if (action.data.length > 5)
                state._profile[parseInt(this._loginId)].name = action.data;

            break

        case 'EDIT-PROFILE-CITY':
            //set city profile
            if (action.data.length > 2) {
                state._profile[parseInt(this._loginId)].city = action.data;
            }
            break

        case 'ADD-POST':
            //func add post to feed and profile
            let newPost = {
                text: action.data.text,
                likes: [],
                user: action.data.user,
            };

            state._profile[action.data.komu].posts.push(newPost);
            state._profile[action.data.komu].postEdit[action.data.user] = '';
            break

        case 'EDIT-POST':
            this._profile[action.id].postEdit[action.num] = action.data.text;
            this.render();
            break

        case 'LIKE-POST':
            //Func like the post
            const idAthor = parseInt(action.data.idAthor);
            const idPost = parseInt(action.data.idPost)
            if (idPost > -1 &&  state._profile[idAthor].posts[idPost].likes.includes(state._loginId)) {
                let index = state._profile[idAthor].posts[idPost].likes.indexOf(state._loginId);
                if (index > -1) {
                    state._profile[idAthor].posts[idPost].likes.splice(index, 1);
                }
            }else {
                state._profile[idAthor].posts[idPost].likes.push(state._loginId);
            }
            break

        case "GET-LOGIN":
            //send id login
            return state._loginId;

        case 'SETLOGIN-LOGIN':
            //auth
            try {
                if (state._profile[action.login].pass === action.pass) {
                    state._loginId = action.login;
                    return true
                }else {
                    return false
                }
            }catch {
                alert('Ошибка при входе')
                return false
            }

        case 'LOGOUT':
            //logout
            state._loginId = 0;
            break


        default:
            console.log('ERROR: ProfileReducer - no action.type')
            break
    }

    return state
};

export default profileReducer;