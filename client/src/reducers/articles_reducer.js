export default function (state = {}, action) {
    switch (action.type) {
        case 'GET_ARTICLES':
            return { ...state, list: action.payload }
        case 'GET_SINGLE_ARTICLE':
            return {
                ...state,
                article: action.payload
            }
        case 'GET_ARTICLE_WITH_ADMIN':
            return {
                ...state,
                article: action.payload.article,
                admin: action.payload.admin
            }
        case 'CLEAR_ARTICLE_WITH_ADMIN':
            return {
                ...state,
                article: action.payload.article,
                admin: action.payload.admin
            }
        case 'ADD_ARTICLE':
            return {
                ...state,
                newArticle: action.payload
            }
        case 'CLEAR_NEWARTICLE':
            return {
                ...state,
                newArticle: action.payload
            }
        case 'UPDATE_SINGLE_ARTICLE':
            return {
                ...state,
                updateArticle: action.payload.success,
                article: action.payload.doc
            }
        case 'DELETE_SINGLE_ARTICLE':
            return {
                ...state,
                postDeleted: action.payload
            }
        case 'CLEAR_SINGLE_ARTICLE':
            return {
                ...state,
                updateArticle: action.payload.updateArticle,
                article: action.payload.article,
                postDeleted: action.payload.postDeleted
            }
        default:
            return state;
    }
}