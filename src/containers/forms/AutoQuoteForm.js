import React, { PureComponent } from 'react';

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
    // const {
    //   name,
    //   email
    // } = this.state;

    this.setSet({
      name: '',
      email: ''
    });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { name, email } = this.state;
    return (
      <form action='#'>
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
