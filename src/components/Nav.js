import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link to="/">
        <h3>Logo</h3>
      </Link>
      <ul>
        {/* <link> acts as an anchor tag and 
        it's use to link/redirect users to a diff route */}
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
