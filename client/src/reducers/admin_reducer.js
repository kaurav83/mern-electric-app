export default function(state = {}, action) {
    switch(action.type) {
        case 'ADMIN_LOGIN': 
            return {...state, login: action.payload}
        case 'ADMIN_AUTH':
            return {...state, login: action.payload}
        case 'GET_ADMIN_POSTS':
            return {...state, adminPosts: action.payload}
        default: 
            return state;
    }
}