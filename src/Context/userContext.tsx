import {
  createContext,
  useEffect,
  useState,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";
import { User } from "../interfaces/users.interfaces";
import { verifyUser } from "../services/auth";

interface UserStateAndSetters {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

const UserContext = createContext<UserStateAndSetters | null>(null);

export default function UserProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);

  const verify = async () => {
    const res = await verifyUser();
    if (res.data) setUser(res.data);
  };

  useEffect(() => {
    verify();
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const stateAndSetters: UserStateAndSetters = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={stateAndSetters}>
      {children}
    </UserContext.Provider>
  );
}
