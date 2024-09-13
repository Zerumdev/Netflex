import { createRoot } from "react-dom/client";
import { AuthProvider } from "./contexts/auth.context";
import "./index.css";
import Router from "./router";
import { TanstackQueryProvider } from "./tanstack-query/client";

createRoot(document.getElementById("root")).render(
  <TanstackQueryProvider>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </TanstackQueryProvider>
);
