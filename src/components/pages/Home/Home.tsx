import { useContext } from 'react'

// Components
import { AppContext } from "../../../app-context/AppContext";

const Home = () => {
  const { userName, userEmail, setUserName } = useContext(AppContext)

  // setTimeout(() => {
  //   setUserName?.('')
  // }, 2000)
  
  return (
    <div><h1>HOME - {userName} - {userEmail}</h1></div>
  )
}

export default Home