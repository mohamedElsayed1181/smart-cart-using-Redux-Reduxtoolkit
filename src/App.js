import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/Home/Home";
import Cart from "./component/Cart/Cart";
import Products from "./component/Products/Products";
import Mainlayout from "./Layout/Mainlayout";
import Navbar from "./component/Navbar/Navbar";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        { path: "Navbar", element: <Navbar /> },
        { path: "Home", element: <Home /> },
        { path: "Products", element: <Products /> },
        { path: "Cart", element: <Cart /> },
      ],
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </>
  );
}
