import { AppContextType } from "../type/appContextType";

export const getInitialContext = () => {
	const initialContext: AppContextType = {
		userName: 'Hiraj', 
		userEmail: 'deyhiraj@gmail.com'
	}

  return initialContext;
}

