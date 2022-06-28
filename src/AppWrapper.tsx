import { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from "react-router-dom"
import { AppContext } from "./app-context/AppContext"
import { useSetAppContext } from "./hooks/useSetAppContext"

interface AppWrapperProps {
    children: ReactNode
}

const queryClient = new QueryClient();

const AppWrapper = ({children}:AppWrapperProps) => {
  const {context, setContext} = useSetAppContext();
	
  return (
    <QueryClientProvider client={queryClient}>
			<AppContext.Provider value={context}>
				<BrowserRouter>
        	{children}
				</BrowserRouter>
    	</AppContext.Provider>
		</QueryClientProvider>
  )
}

export default AppWrapper