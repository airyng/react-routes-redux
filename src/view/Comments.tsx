import React, { useEffect } from "react";
import useTypedSelector from "../hook/useTypedSelector";
import { fetchComments } from "../store/action-creators/main";
import { useDispatch } from "react-redux";
import { Comment } from "../store/types";



const Comments: React.FC = () => {
  const {comments, loading } = useTypedSelector(state => state.main)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!comments.length) {
      dispatch(fetchComments())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function drawCommentRaw (comment: Comment) {
    return (
      <tr key={comment.id}>
        <th scope="row">{comment.id}</th>
        <td>{comment.postId}</td>
        <td>{comment.email}</td>
        <td>{comment.body}</td>
      </tr>
    )
  }

  function drawCommentsTable (comments: Comment[]) {

    if (loading) {
      return (<h2>Идет загрузка...</h2>)
    }
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Post&nbsp;ID</th>
            <th scope="col">Email</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
          {comments.map( item => drawCommentRaw(item))}
        </tbody>
      </table>
    )
  }

  return (
    <div>
      <h1>Comments</h1>
      {drawCommentsTable(comments)}
    </div>
  );
}
export default Comments
