import GeneralRoutes from "./components/Main/GeneralRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { BlogProvider } from "./components/Useful/BlogContext";

function App() {
  return (
    <BlogProvider>
      <Router>
        <GeneralRoutes />
      </Router>
    </BlogProvider>
  );
}

export default App;
