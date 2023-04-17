import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Design from "./pages/Design";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Provider } from "react-redux";
import store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/design/:templateID",
    element: <Design />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
};

export default App;
