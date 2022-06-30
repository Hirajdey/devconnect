import { useContext } from 'react'
import classnames from 'classnames'

// Styles
import Styles from './Home.module.scss'

// Components
import { AppContext } from "../../../app-context/AppContext";
import PageLayout from '../../utils/page-layout/PageLayout';
import ServiceCard from '../../common/service-card/ServiceCard';

const Home = () => {
  const { userName, userEmail, setUserName } = useContext(AppContext)

  // setTimeout(() => {
  //   setUserName?.('')
  // }, 2000)

  return (
    <section className={Styles.main}>
      <PageLayout 
        leftPanel={<>LEFT COLL</>}
        centerPanel={
          <>
            <ServiceCard 
              cardClass={classnames(Styles.serviceCard, 'gradient-border-hover')}
            />
            <ServiceCard 
              cardClass={classnames(Styles.serviceCard, 'gradient-border-hover')}
            />
            <ServiceCard 
              cardClass={classnames(Styles.serviceCard, 'gradient-border-hover')}
            />
          </>
        }
        rightPanel={<>LEFT COL</>}
      />
    </section>
  )
}

export default Home