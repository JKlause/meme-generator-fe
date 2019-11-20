import { connect } from 'react-redux';
import UserForm from '../components/user/UserForm';
import { sessionAction } from '../actions/sessionActions';

const mapStateToProps = () => ({
  buttonText: 'Sign In'
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, username, password) {
    event.preventDefault();
    dispatch(sessionAction(username, password, 'signin'));
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
