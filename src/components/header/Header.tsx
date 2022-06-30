import classnames from 'classnames'

// Styles
import Styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={Styles.siteHeader}>
        <div className={classnames('container', Styles.container)}>
            <div className={classnames('row', Styles.row)}>
                <div className='col'>SiteLOGO</div>
                <div className='col'>Site nav</div>
            </div>
        </div>
    </header>
  )
}

export default Header