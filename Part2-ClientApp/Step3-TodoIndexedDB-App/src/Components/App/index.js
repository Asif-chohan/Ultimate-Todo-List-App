import React, { Component } from 'react';
import 'typeface-roboto/index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import UltimateToDoApp from '../navigation'
import PropTypes from 'prop-types';

import { loadTodos } from '../Redux/actions/LoadToDoActions'

//Main App Component and Setup React Toastify

class App extends Component {

  componentDidMount() {
    this.props.loadTodos();
  }

  render() {
    return (
      <div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />

        <UltimateToDoApp />

      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

//////////
// "conect" function has 2 parameters first for use of State data from store and second for invoke action function in actions file
// And Export this component with the style.js file
//////////

export default connect(null, { loadTodos })(App);