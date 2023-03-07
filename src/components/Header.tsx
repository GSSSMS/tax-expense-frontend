import { useNavigate } from "react-router-dom";
import { useUser } from "../Context/userContext";
import { logOutUser } from "../services/auth";

export default function Header() {
  const [, setUser] = useUser();

  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await logOutUser();
    if (res) setUser(null);
    navigate("/");
  };

  return (
    <nav>
      <button type="submit" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}
