import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout.tsx";
import RouterProviderWrapper from "./Router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <RouterProviderWrapper />
    </Layout>
  </React.StrictMode>
);
