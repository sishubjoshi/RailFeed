import React from 'react'
import { Link } from 'react-router-dom';
 const SideNav = () => {
  return (
    <div className="Sidenav">
      <ul className="nav flex-column">
          <li className="nav-item">
                <Link className="nav-link" to="/" >
                <h5>Analyzer</h5>
                </Link>
          </li>
          <li className="nav-item">
                <Link className="nav-link" to="/review">
                    <h5>ReviewTesting</h5>
                </Link>
          </li>
      </ul>
    </div>
  )
}

export default SideNav;
