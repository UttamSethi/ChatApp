import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [username, setUsername] = useState(null);
  const [id, setID] = useState(null);
  useEffect(()=>{
    axios.get('profile').then(response =>{
      setID(response.data.userId);
      setUsername(response.data.username);
    });
  },[]);

  return (
    <UserContext.Provider value={{username, setUsername, id, setID }}>
      {children}
    </UserContext.Provider>
  );
}
