import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import UserProvider from "./Context/userContext";

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
