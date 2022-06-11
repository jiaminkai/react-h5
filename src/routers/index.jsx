import * as React from 'react';
import {Link, NavLink, useNavigate, useRoutes} from 'react-router-dom';
import Element from './index.js';
import './index.scss';
function Routers(props) {
  return (
    <div className="routers">
      <Link to="/home">Home</Link>
      <Link   to="/list">Main</Link>
      <div>
      { <Element /> }
      </div>
    </div>
  );
}

function useMyNavigate(path) {
  let navigate = useNavigate();
  return () => navigate(path);
}
function activeStyle({isActive}) {
  return {color: isActive ? "#409EFF" : ""};
}
function activeClass({isActive}) {
  return 'routers__link ' + (isActive ? "routers__link--active" : "");
}

export default Routers;
