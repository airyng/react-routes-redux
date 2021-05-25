import { MainStateActionTypes, MainState, MainStateAction } from '../types'

const initialState: MainState = {
  posts: [],
  comments: [],
  loading: false,
  error: null
}

export const mainReducer = (state = initialState, action: MainStateAction): MainState => {
  switch (action.type) {
    case MainStateActionTypes.FETCH_POSTS:
      return { ...state, loading: true }
    case MainStateActionTypes.FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload }
    case MainStateActionTypes.FETCH_POSTS_ERROR:
        return { ...state, loading: false, posts: [] }
        case MainStateActionTypes.FETCH_COMMENTS:
          return { ...state, loading: true }
        case MainStateActionTypes.FETCH_COMMENTS_SUCCESS:
          return { ...state, loading: false, comments: action.payload }
        case MainStateActionTypes.FETCH_COMMENTS_ERROR:
            return { ...state, loading: false, comments: [] }
    default:
      return state
  }
}