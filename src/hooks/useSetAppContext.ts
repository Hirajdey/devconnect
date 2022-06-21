import { useEffect, useState } from 'react'
import { AppContextType } from '../type/appContextType';
import { getInitialContext } from '../methods/getInitialContext';


export const useSetAppContext = () => {
  const [context, setContext] = useState<AppContextType>(getInitialContext());

	useEffect(() => {
		setContext((intlState) => ({
			...intlState,
			setUserName: (userName) => {
				if(userName){
					setContext( (state) => ({...state, userName}))
				}
			}
		}))

	},[])


  return {context, setContext}
}
