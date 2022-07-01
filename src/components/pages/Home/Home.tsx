import { useContext } from 'react'
import classnames from 'classnames'

// Styles
import Styles from './Home.module.scss'

// Components
import { AppContext } from "../../../app-context/AppContext";
import PageLayout from '../../utils/page-layout/PageLayout';
import ServiceCard from '../../common/service-card/ServiceCard';
import FilterPanel from './filter-panel/FilterPanel';
import BgBubbleAnimated from '../../utils/bg-bubble-animated/BgBubbleAnimated';

const Home = () => {
  const { userName, userEmail, setUserName } = useContext(AppContext)

  // setTimeout(() => {
  //   setUserName?.('')
  // }, 2000)

  return (
    <section className={Styles.main}>
      <PageLayout 
        leftPanel={
          <FilterPanel/>
        }
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
      <BgBubbleAnimated/>
    </section>
  )
}

export default Home