import { Component } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from '../../actions';

class Logout extends Component {

  componentDidMount() {
    this.props.logout()
  }

  render() {
    return <Navigate to={'/'}/>
  }

}

const mapDispatchToProps = {
  logout
}

export default connect(null, mapDispatchToProps)(Logout);