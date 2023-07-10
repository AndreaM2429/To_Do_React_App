/* eslint-disable no-nested-ternary */
import { NavLink, useNavigate } from 'react-router-dom';
import React from 'react';
import { useAuthContext } from '../context/AuthContext';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
  { path: 'login', text: 'Login' },
];

const Navbar = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <nav className="navbar">
        <ul>
          {links.map((link) => (
            <React.Fragment key={link.text}>
              {link.path === 'login' ? (
                !user && (
                <li>
                  <NavLink to={link.path}>{link.text}</NavLink>
                </li>
                )
              ) : link.path === 'profile' ? (
                user && (
                <li>
                  <NavLink to={link.path}>
                    {link.text}
                  </NavLink>
                </li>
                )
              ) : (
                <li>
                  <NavLink to={link.path}>{link.text}</NavLink>
                </li>
              )}
            </React.Fragment>
          ))}
          {!user && (
          <li className="log-in">
            <span>Log in to edit to-dos</span>
          </li>
          )}
        </ul>
      </nav>
      {user && (
      <div className="logout">
        <p>{user}</p>
        <button type="button" onClick={handleLogout}>Logout</button>
      </div>
      )}
    </>
  );
};

export default Navbar;
