import GeneralRoutes from "./components/Main/GeneralRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { MainProvider } from "./components/Useful/MainContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <MainProvider>
      <Router>
        <ToastContainer />
        <GeneralRoutes />
      </Router>
    </MainProvider>
  );
}

export default App;
