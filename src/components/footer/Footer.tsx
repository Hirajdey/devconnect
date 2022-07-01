import classnames from 'classnames'

// Styles
import Styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={classnames(Styles.siteFooter, "gradient-animated-bg")}>
      <div className='container'>
        <div className='row'> 
          <div className='col'>
            logo
          </div>
          <div className='col'>
            service menu
          </div>
          <div className='col'>
            newsletter
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer