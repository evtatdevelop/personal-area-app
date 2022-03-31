import classes from './header.module.scss'
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <h1>Personal Area</h1>
        <nav className={classes.headerNav}>
          <ul>
            <li><Link to='/contacts'>Contacts</Link></li>
            <li><Link to='/'>Logaot</Link></li>
          </ul>
        </nav>
      </div>

    </header>
  )
}

export default Header;