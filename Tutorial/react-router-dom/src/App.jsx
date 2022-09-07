import { useRoutes, generatePath } from "react-router-dom";
import routes from "./components/routes/routes";
import { url } from "./components/utils";

function App() {
  return useRoutes(routes);
}

export default App;
