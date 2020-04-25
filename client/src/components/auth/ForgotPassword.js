import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const title = {
  pageTitle: 'Forgot Password Screen',
};

class ForgotPassword extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      showError: false,
      messageFromServer: '',
    };
  }

  

}
