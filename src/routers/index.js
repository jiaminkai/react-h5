import { lazy, Suspense } from 'react';
import { useRoutes, Navigate } from "react-router-dom";
// import { LoadingOutlined } from '@ant-design/icons';
import Dfinder from '@/pages/Dfinder'
import Home from '@/pages/Home/index.jsx';
import Index from '@/pages/Index';
import Shops from '@/pages/Me/Shops/Shops.jsx'
import Account from '@/pages/Me/Account/Account.jsx'
import Login from '@/pages/Login'
import Mine from '@/pages/Me/me.jsx'
const List = lazy(() => import("@/pages/List"));
export default () => useRoutes([
  {
    path: "/",
    element: <Index id="index" />,
    children: [
      {
        path: "/",
        element: <Home id="home" />
      },
      {
        path: "/mine",
        element: <Mine id="mine" />
      },
      {
        path: "/home",
        element: <Home id="home" />
      },
    ]
  },
  {
    path: "/login",
    element: <Login id="login" />
  },
  {
    path: "/shops",
    element: <Shops id="shops" />
  },
  {
    path: "/account",
    element: <Account id="account" />
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
