import AppLayout from "./AppLayout.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductListing from "./pages/ProductListing.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/search", element: <ProductListing /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
