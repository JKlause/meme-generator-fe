import { connect } from 'react-redux';
import UserForm from '../components/user/UserForm';
import { sessionSignin } from '../actions/sessionActions';

const mapStateToProps = () => ({
  buttonText: 'Sign In'
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, username, password) {
    event.preventDefault();
    dispatch(sessionSignin(username, password));
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
