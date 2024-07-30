import { lazy } from "react";
import App from "./App.tsx";
import ErrorElement from "./ErrorElement.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const ContactLazy = lazy(() => import("./Contact.tsx"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/contact",
      element: <ContactLazy />,
      errorElement: <ErrorElement />,
    },
    {
      path: "/loader",
      element: <ContactLazy />,
      errorElement: <ErrorElement />,
      loader: () => {
        throw new Error("ローダーエラーです。");
      },
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
