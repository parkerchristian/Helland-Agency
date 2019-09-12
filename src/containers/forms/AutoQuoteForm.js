import axios from 'axios';
import React, { PureComponent } from 'react';
const API_PATH = 'http://localhost:3000/Helland-Agency/api/forms/index.php';

export default class AutoQuoteForm extends PureComponent {
  state = {
    name: '',
    email: '',
    mailSent: false,
    error: null
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        });
      })
      .catch(error => this.setState({ error: error.message }));

  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { name, email } = this.state;
    return (
      <form action='#' method='post'>
        <label>Name:</label>
        <input type='text' name='name' placeholder='Name' value={name} onChange={this.handleChange} />

        <label>Email:</label>
        <input type='text' name='email' placeholder='Email' value={email} onChange={this.handleChange}/>

        <input type='submit' onClick={this.handleSubmit} name='submit' value='Submit' />
        <div>
          {this.state.mailSent &&
            <div>Submit Successful! We will contact you within 24 hours.</div>
          }
        </div>
      </form>
    );
  }
}
