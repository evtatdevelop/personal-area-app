import classes from './header.module.scss'
import { Link } from 'react-router-dom';

const Header = props => {
  const {logined} = props;
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <h1>Personal Area</h1>
        <nav className={classes.headerNav}>
        {logined
          ? <ul>
              <li><Link to='/contacts'>Contacts</Link></li>
              <li><Link to='/'>Logaot</Link></li>
            </ul>
          : null
        }
        </nav>
      </div>

    </header>
  )
}

export default Header;