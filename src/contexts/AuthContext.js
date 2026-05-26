import React, { createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = async userInfo => {
    setUser(userInfo);
    await AsyncStorage.setItem('user', JSON.stringify(userInfo));
  };
  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  const autoLogin = async () => {
    const stored = await AsyncStorage.getItem('user');
    if (stored) {
      setUser(JSON.parse(stored));
      return true;
    }
    return false;
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, autoLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
