import { createContext, useEffect, useState, useContext } from "react";
import { User } from "../interfaces/users.interfaces";

const UserContext = createContext<User | null>(null);

export default function UserProvider({ children }: any) {
  const [user, setUser] = useState({});
}
