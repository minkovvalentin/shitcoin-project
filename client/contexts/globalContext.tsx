import { createContext } from 'react';
import { ThemeEnum } from '../enums/theme'

interface ContextProps {
  authenticated: boolean,
  updateAuthenticated: Function,
  theme: ThemeEnum.DARK | ThemeEnum.LIGHT,
  updateTheme: Function
} 

export const GlobalContext = createContext<ContextProps>({ 
  authenticated: false,
  updateAuthenticated: () => {},
  theme: ThemeEnum.DARK,
  updateTheme: () => {}
});