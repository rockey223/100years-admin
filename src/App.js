import GeneralRoutes from "./components/Main/GeneralRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { MainProvider } from "./components/Useful/MainContext";
import { ProfileProvider } from "./components/Useful/ProfileContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ProfileProvider>
      <MainProvider>
        <Router>
          <ToastContainer />
          <GeneralRoutes />
        </Router>
      </MainProvider>
    </ProfileProvider>
  );
}

export default App;
