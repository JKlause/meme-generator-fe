import { connect } from 'react-redux';
import UserForm from '../components/user/UserForm';
import { sessionSignup } from '../actions/sessionActions';

const mapStateToProps = () => ({
  buttonText: 'Sign Up'
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, username, password) {
    event.preventDefault();
    dispatch(sessionSignup(username, password));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
