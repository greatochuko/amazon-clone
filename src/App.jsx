import AppLayout from "./AppLayout.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductListing from "./pages/ProductListing.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/search", element: <ProductListing /> },
      { path: "/product/:id", element: <ProductDetails /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
