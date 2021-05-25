import React from 'react';
import { Link, useLocation } from 'react-router-dom'

function Header () {

  const location = useLocation();
  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link className={'nav-link ' + (location.pathname === '/home' ? 'active' : '')} aria-current="page" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className={'nav-link ' + (location.pathname === '/posts' ? 'active' : '')} to="/posts">Posts</Link>
      </li>
      <li className="nav-item">
        <Link className={'nav-link ' + (location.pathname === '/comments' ? 'active' : '')} to="/comments" aria-disabled="true">Comments</Link>
      </li>
    </ul>
  )
}
export default Header 