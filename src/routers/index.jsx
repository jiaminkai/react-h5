import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Element from './index.js';
import './index.scss';
function Routers(props) {
  return (
    <div className="routers">
      <div>
      { <Element /> }
      </div>
    </div >
  );
}

function useMyNavigate(path) {
  let navigate = useNavigate();
  return () => navigate(path,{replace:true,state:{type:'error'}});
}
// function activeStyle({isActive}) {
//   return {color: isActive ? "#409EFF" : ""};
// }
// function activeClass({isActive}) {
//   return 'routers__link ' + (isActive ? "routers__link--active" : "");
// }

export default Routers;
