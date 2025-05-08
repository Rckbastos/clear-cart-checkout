
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import type { User, Cart } from '../types';

// Definir o estado inicial
interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  cart: Cart | null;
  darkMode: boolean;
  isLoading: boolean;
}

const initialState: AppState = {
  user: null,
  isAuthenticated: false,
  isAdmin: false,
  cart: null,
  darkMode: false,
  isLoading: false,
};

// Definir ações
type Action = 
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_AUTHENTICATED'; payload: boolean }
  | { type: 'SET_ADMIN'; payload: boolean }
  | { type: 'SET_CART'; payload: Cart | null }
  | { type: 'SET_DARK_MODE'; payload: boolean }
  | { type: 'SET_LOADING'; payload: boolean };

// Criar o reducer
const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_AUTHENTICATED':
      return { ...state, isAuthenticated: action.payload };
    case 'SET_ADMIN':
      return { ...state, isAdmin: action.payload };
    case 'SET_CART':
      return { ...state, cart: action.payload };
    case 'SET_DARK_MODE':
      return { ...state, darkMode: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

// Criar o contexto
interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Criar o provider
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Criar hook personalizado para uso do contexto
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
