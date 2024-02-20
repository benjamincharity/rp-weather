import { createRouter } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import App, { queryClient } from "./App.tsx";
import { routeTree } from "./routeTree.gen.ts";
import "./styles/tailwind.css";

const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPreload: "intent",
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router;
  }
}

const rootElement = document.querySelector("#root") as Element;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App router={router} />
    </React.StrictMode>,
  );
}
