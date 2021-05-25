import React, { useEffect } from "react";
import useTypedSelector from "../hook/useTypedSelector";
import { fetchPosts } from "../store/action-creators/main";
import { useDispatch } from "react-redux";
import { Post } from "../store/types";



const Posts: React.FC = () => {
  const {posts, loading } = useTypedSelector(state => state.main)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!posts.length) {
      dispatch(fetchPosts())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function drawPostRaw (post: Post) {
    return (
      <tr key={post.id}>
        <th scope="row">{post.id}</th>
        <td>{post.title}</td>
      </tr>
    )
  }

  function drawPostTable (posts: Post[]) {

    if (loading) {
      return (<h2>Идет загрузка...</h2>)
    }

    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
          {posts.map( post => drawPostRaw(post))}
        </tbody>
      </table>
    )
  }

  return (
    <div>
      <h1>Posts</h1>
      {drawPostTable(posts)}
    </div>
  );
}
export default Posts
