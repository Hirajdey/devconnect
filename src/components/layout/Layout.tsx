import { ReactNode } from "react"

// Components
import Footer from "../footer/Footer"
import Header from "../header/Header"

interface LayoutProps {
    children: ReactNode
}

const Layout = ({children}:LayoutProps) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout