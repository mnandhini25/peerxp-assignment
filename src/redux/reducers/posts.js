import {GET_ALL_POSTS,SET_POSTS} from '../../shared/constants/actions';

const initState = {
    postList : [],
    flag:false
}

const postsReducer = (state=initState, action) =>{
    console.log('action:', action)
    switch(action.type) {
        case GET_ALL_POSTS :{
            return {...state}
        }
        case SET_POSTS:{
            return {...state, ...action.payload}
        }
        default :{
            return { ...state}
        }
    }

}

export default postsReducer;