import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import Home from "./routes/home";
import Welcome from "./routes/welcome";
import LeftoversProvider from "./providers/LeftoversProvider";
import RecipesProvider  from './providers/RecipesProvider';
import UserRecipesProvider from './providers/UsersRecipesProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "home",
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecipesProvider>
    <LeftoversProvider>
    <UserRecipesProvider>
    <RouterProvider router={router} />
    </UserRecipesProvider>
    </LeftoversProvider>
    </RecipesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
