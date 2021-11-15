import React, {
  createContext, useContext, useEffect, useState,
} from 'react';

import { supabase } from '../config/supabase';

export const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active sessions and sets the user
    const session = supabase.auth.session();

    if(session && session.user) {
      setCurrentUser(session.user);
      setLoading(false);
    }else{
      setCurrentUser(null);
      setLoading(false);
    }

    const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
      setCurrentUser(session?.user ?? null);
      setLoading(false);
    });

    return () => listener.unsubscribe();
  }, []);

  const value = { currentUser };

  return (
    <>
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
