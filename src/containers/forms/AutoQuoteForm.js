import React, { PureComponent } from 'react';

export default class AutoQuoteForm extends PureComponent {
  render() {
    return (
      <form action='/autoQuoteSubmit.php'>
        <label>Name:</label>
        <input type='text' name='name' placeholder='Name'></input>

        <label>Email:</label>
        <input type='text' name='email' placeholder='Email'></input>
        
        <input type='submit' name='submit' value='Submit' />
      </form>
    );
  }
}
