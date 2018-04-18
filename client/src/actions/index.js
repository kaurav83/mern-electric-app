import axios from 'axios';

export function getArticles(
    limit = 10, 
    start = 0,
    order = 'asc',
    list = ''
) {
    const request = axios.get(`/api/articles?limit=${limit}&skip=${start}&order=${order}`)
        .then(response => {
            if (list) {
                return [...list, ...response.data]
            } else {
                return response.data
            }
        })

    return {
        type: 'GET_ARTICLES',
        payload: request
    }
}

export function getArticleWithAdmin(articleId) {
    const request = axios.get(`/api/getArticle?id=${articleId}`);

    return (dispatch) => {
        request.then(({data}) => {
            let article = data;
            
            axios.get(`/api/getAdmin?id=${article.ownerId}`)
                .then(({data}) => {
                    let response = {
                        article,
                        admin: data
                    }

                    dispatch({
                        type: 'GET_ARTICLE_WITH_ADMIN',
                        payload: response
                    })
                })
        })
    }
}

export function clearArticleWithAdmin() {
    return {
        type: 'CLEAR_ARTICLE_WITH_ADMIN',
        payload: {
            article: {},
            admin: {}
        }
    }
}

/* ============ GET, UPDATE, DELETE, CLEAR SINGLE ARTICLE */
export function getSingleArticle(id) {
    const request = axios.get(`/api/getArticle?id=${id}`)
                .then(response => response.data)
    return {
        type: 'GET_SINGLE_ARTICLE',
        payload: request
    }
}

export function updateArticle(data) {
    const request = axios.post(`/api/article_update`, data)
                .then(response => response.data)
    return {
        type: 'UPDATE_SINGLE_ARTICLE',
        payload: request
    } 
}

export function deleteArticle(id) {
    const request = axios.delete(`/api/article_delete?id=${id}`)
                    .then(response => response.data);

    return {
        type: 'DELETE_SINGLE_ARTICLE',
        payload: request
    }
}

export function clearArticle() {
    return {
        type: 'CLEAR_SINGLE_ARTICLE',
        payload: {
            article: null,
            updateArticle: false,
            postDeleted: false
        }
    }
}

/*=============== ADMIN ==============*/
export function loginAdmin({email, password}) {
    const request = axios.post('/api/loginAdmin', {email, password})
                    .then(response => {
                        return response.data;
                    })

    return {
        type: 'ADMIN_LOGIN',
        payload: request
    }
}

export function addArticle(article) {
    const request = axios.post('/api/article', article)
                    .then(response => response.data)
    return {
        type: 'ADD_ARTICLE',
        payload: request
    }
}

export function getAdminPosts(adminId) {
    const request = axios.get(`/api/admin_posts?admin=${adminId}`)
                .then(response => response.data);

    return {
        type: 'GET_ADMIN_POSTS',
        payload: request
    }

}

export function clearNewArticle() {
    return {
        type: 'CLEAR_NEWARTICLE',
        payload: {}
    }
}

/* ================ USER ================ */
export function loginUser({email, password}) {
    const request = axios.post('/api/login', {email, password})
                    .then(response => {
                        return response.data;
                    })
    return {
        type: 'USER_LOGIN',
        payload: request
    }
}

export function getUsers() {
    const request = axios.get('/api/users')
                .then(response => response.data)

    return {
        type: 'GET_USER',
        payload: request
    }
}

export function userRegister(user, userList) {
    const request = axios.post(`/api/register`, user)
        // .then(console.log(user, 'from database'))

    return (dispatch) => {
        request.then(({data}) => {
            let users = data.success ? [...userList, data.user] : userList;
            let response = {
                success: data.success,
                users
            }

            dispatch({
                type: 'USER_REGISTER',
                payload: response
            })
        })
    }
}

/* ============ AUTH USER ========== */
export function authentication() {
    const request = axios.get('/api/auth')
                    .then(response => response.data);
    
    return {
        type: 'USER_AUTH',
        payload: request
    }
}

/*========== AUTH ADMIN =========== */
export function authenticationAdmin() {
    const request = axios.get('/api/authadmin')
                    .then(response => response.data);

    return {
        type: 'ADMIN_AUTH',
        payload: request
    }
}