import { BrowserRouter } from "react-router-dom";
import { DocumentTitle } from "../components/DocumentTitle";
import { ScrollToHash } from "../components/ScrollToHash";
import { AppRoutes } from "./routes";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <DocumentTitle />
      <ScrollToHash />
      <AppRoutes />
    </BrowserRouter>
  );
}
