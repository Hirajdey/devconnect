import { ReactNode } from "react"
import { AppContext } from "./app-context/AppContext"
import { useSetAppContext } from "./hooks/useSetAppContext"

interface AppWrapperProps {
    children: ReactNode
}

const AppWrapper = ({children}:AppWrapperProps) => {
  const {context, setContext} = useSetAppContext();

  return (
    <AppContext.Provider value={context}>
        {children}
    </AppContext.Provider>
  )
}

export default AppWrapper