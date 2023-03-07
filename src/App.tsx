import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import DisplayStuff from "./components/DisplayStuff";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProvider from "./Context/userContext";

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Auth />} />
            <Route element={<ProtectedRoute />}>
              <Route path="displayStuff" element={<DisplayStuff />} />
            </Route>
          </Route>
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
