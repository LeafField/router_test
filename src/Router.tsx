import { lazy } from "react";
import App from "./App.tsx";
import ErrorElement from "./ErrorElement.tsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const ContactLazy = lazy(() => import("./Contact.tsx"));

const router = createBrowserRouter(
  [
    {
      element: <Outlet />,
      errorElement: <ErrorElement />,
      children: [
        {
          path: "/",
          element: <App />,
        },
        {
          path: "/contact",
          element: <ContactLazy />,
        },
        {
          path: "/loader",
          element: <ContactLazy />,
          loader: () => {
            throw new Error("ローダーエラーです。");
          },
        },
      ],
    },
  ],
  {
    basename: "/router_test",
  }
);

const RouterProviderWrapper = () => {
  return <RouterProvider router={router} />;
};

export default RouterProviderWrapper;
