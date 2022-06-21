import { createContext } from 'react';
import { AppContextType } from '../type/appContextType';
import { getInitialContext } from '../methods/getInitialContext';


export const AppContext = createContext<AppContextType>(getInitialContext());