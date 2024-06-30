import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";

const router = createBrowserRouter([{ path: "*", element: <Root /> }]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
