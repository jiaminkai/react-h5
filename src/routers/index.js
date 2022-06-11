import { Children, lazy, Suspense } from 'react';
import { useRoutes, Navigate } from "react-router-dom";
// import { LoadingOutlined } from '@ant-design/icons';

import Home from '@/pages/Home/index.jsx';
import Child from '@/pages/Child/index.jsx';

const List =lazy(() => import("@/pages/List"));


export default () => useRoutes([
    { path: "/*", element: <Navigate to="/home" /> },
    {
        path: "/home",
        element: <Home id="home" />,
        children:[
          {
            path: "child",
            element: <Child id="child" />
          }
        ]
      },
      {
        path: "/list",
        element:<Suspense><List /></Suspense>
      },
      
]);
