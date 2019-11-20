import { connect } from 'react-redux';
import UserForm from '../components/user/UserForm';
import { sessionAction } from '../actions/sessionActions';

const mapStateToProps = () => ({
  buttonText: 'Sign Up'
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, username, password) {
    event.preventDefault();
    dispatch(sessionAction(username, password, 'signup'));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
