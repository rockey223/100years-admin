import GeneralRoutes from "./components/Main/GeneralRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { MainProvider } from "./components/Useful/MainContext";

function App() {
  return (
    <MainProvider>
      <Router>
        <GeneralRoutes />
      </Router>
    </MainProvider>
  );
}

export default App;
