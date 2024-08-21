import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import { HelmetProvider } from "react-helmet-async";
import { GlobalContext } from "./context/GlobalContext";

const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <>
        <GlobalContext>
          <Root />
        </GlobalContext>
      </>
    ),
  },
]);

const App = () => {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />;
    </HelmetProvider>
  );
};

export default App;
