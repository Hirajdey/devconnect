import { useContext } from 'react'

// Styles
import Styles from './Home.module.scss'

// Components
import { AppContext } from "../../../app-context/AppContext";

const Home = () => {
  const { userName, userEmail, setUserName } = useContext(AppContext)

  // setTimeout(() => {
  //   setUserName?.('')
  // }, 2000)

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'> 
          COL 1
        </div>
        <div className='col'>
          COL 2
        </div>
        <div className='col'>
          COL 3
        </div>
      </div>
      <h1>HOME - {userName} - {userEmail}</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil laboriosam numquam aliquid officia at laborum quis ab laudantium! Inventore numquam et sint reprehenderit. Corporis quis eveniet quae accusantium deserunt impedit!</p>
      <button className={Styles.expoloreBtn}>EXPLORE MORE</button>
    </div>
  )
}

export default Home