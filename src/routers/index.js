import { lazy, Suspense } from 'react';
import { useRoutes, Navigate } from "react-router-dom";
// import { LoadingOutlined } from '@ant-design/icons';
import Dfinder from '@/pages/Dfinder'
import Home from '@/pages/Home/index.jsx';
import Login from '@/pages/Login'
import {Child2,Child} from '@/pages/Child/index.jsx';


const List = lazy(() => import("@/pages/List"));
export default () => useRoutes([
  {
    path: "/",
    element: <Home id="home" />
  },
  {
    path: "/login",
    element: <Login id="login" />
  },
    {
    path: "/home",
    element: <Home id="home" />,
    children: [
      {
        index: true,
        element: <Child to="child" />,
      },
      {
        path: "child2",
        element: <Child2 id="child" />
      },
      { path: "*", element: <Navigate to="/home" /> }
    ]
  },
  {
    path: "/list",
    element: <Suspense><List /></Suspense>
  },
  {
    path: "/*",
    element: <Dfinder id="dfinder" />
  },

]);
