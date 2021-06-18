const messageReducer = (state, action) => {

    switch (action.type) {
        case 'GET-MESSAGES':
            //send list messages
            return state._dialog.list[state._loginId];

        case 'ADD-MESSAGEITEM':
            let messagesData = {
                ot: action.data.ot,
                text: action.data.text,
            }

            state._dialog.list[action.data.ot][action.data.komu].messages.push(messagesData)
            break

        default:
            console.log('ERROR: ProfileReducer - no action.type')
            break

    }

    return state
};

export  default messageReducer;