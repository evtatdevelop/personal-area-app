import classes from './header.module.scss'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions';

const Header = props => {
  const {idToken} = props;
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <h1>Personal Area</h1>
        <nav className={classes.headerNav}>
        {idToken
          ? <ul>
              {/* <li><Link to='/contacts'>Contacts</Link></li> */}
              <li><Link to='/logout'>Logout</Link></li>
            </ul>
          : null
        }
        </nav>
      </div>

    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    idToken: !!state.idToken
  }
}

const mapDispatchToProps = {
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);