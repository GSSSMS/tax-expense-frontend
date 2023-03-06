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
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext<UserStateAndSetters>(
  {} as UserStateAndSetters
);

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const verify = async () => {
    const res = await verifyUser();
    if (res.data) setUser(res.data);
    setLoading(false);
  };

  useEffect(() => {
    verify();
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const stateAndSetters: UserStateAndSetters = {
    user,
    setUser,
    loading,
    setLoading,
  };

  return (
    <UserContext.Provider value={stateAndSetters}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const { user, setUser } = useContext(UserContext);
  return [user, setUser] as const;
}

export function useAuthLoading() {
  const loadingState = useContext(UserContext);
  return [loadingState?.loading, loadingState?.setLoading];
}
