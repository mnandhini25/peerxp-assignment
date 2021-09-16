import {GET_ALL_POSTS, SET_POSTS} from '../../shared/constants/actions';

export const getAllPosts = () => {
    
    return {type: GET_ALL_POSTS}
}

export const setPosts = (data) => {
    
    return {type: SET_POSTS, payload:data}
    
}