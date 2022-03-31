import {Component} from 'react'
import classes from './contactPage.module.scss';
// import Input from '../../components/input';
// import Button from '../../components/button';

export default class ContactPage extends Component {
  
  render() {
    return(
      <div className={classes.contacts}>
        There're gonna be my contacts.
      </div>
    )
  }
}