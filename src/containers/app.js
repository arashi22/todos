import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { loadTodos } from '../redux/actions/actions'
import { Todos } from '../component/Todos'
import SocialButton from '../component/SocialButton'
import './app.css';

class App extends Component {
  static propTypes = {
    todos: PropTypes.array,
  }

  static defaultProps = {
    todos: [],
  }

  state = {
    isLoggedIn: false
  }

  componentWillMount() {
    const { token } = localStorage;
    if (!token || token === 'undefined') {
      this.setState({ isLoggedIn: false })
    } else {
      this.setState({ isLoggedIn: true })
      this.props.fetchTodos();
    }
  }

  handleSocialLogin = (user) => {
    this.setState({ isLoggedIn: true })
    localStorage.setItem("token", user)
    this.props.fetchTodos();
  }
  
  handleSocialLoginFailure = (err) => {
    
  }
  
  render() {
    const { todos } = this.props
    const { isLoggedIn } = this.state
    return (
      <div className="app">
        {!isLoggedIn ? 
          <SocialButton
            provider='facebook'
            appId='528008097215557'
            onLoginSuccess={this.handleSocialLogin}
            onLoginFailure={this.handleSocialLoginFailure}
          >
            Login with Facebook
          </SocialButton>
        :
          todos && <Todos datas={todos} />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.AppReducer.todos,
  location: state.routing.location,
})

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(loadTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
