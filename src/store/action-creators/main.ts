import { MainStateAction, MainStateActionTypes } from "../types"
import { Dispatch } from "redux"
import api from '../../plugins/api'

export const fetchPosts = () => {
  return async (dispatch: Dispatch<MainStateAction>) => {
    try {
      dispatch( { type: MainStateActionTypes.FETCH_POSTS })
      const response = await api.getPosts()
      dispatch( { type: MainStateActionTypes.FETCH_POSTS_SUCCESS, payload: response })
    } catch (e) {
      dispatch( { type: MainStateActionTypes.FETCH_POSTS_ERROR })
    }
  }
}

export const fetchComments = () => {
  return async (dispatch: Dispatch<MainStateAction>) => {
    try {
      dispatch( { type: MainStateActionTypes.FETCH_COMMENTS })
      const response = await api.getComments()
      dispatch( { type: MainStateActionTypes.FETCH_COMMENTS_SUCCESS, payload: response })
    } catch (e) {
      dispatch( { type: MainStateActionTypes.FETCH_COMMENTS_ERROR })
    }
  }
}