import Comments from "../view/Comments";
import Home from "../view/Home";
import Posts from "../view/Posts";

interface RoutesObject {
  path: string;
  name: string;
  exact: boolean;
  component: any;
}

const routes: Array<RoutesObject> = [
  {
    path: "/",
    name: 'home',
    exact: true,
    component: Home
  },
  {
    path: "/comments",
    name: 'comments',
    exact: true,
    component: Comments
  },
  {
    path: "/posts",
    name: 'posts',
    exact: true,
    component: Posts
  }
];

export default routes