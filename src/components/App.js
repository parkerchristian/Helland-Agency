import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import AutoQuoteForm from '../containers/forms/AutoQuoteForm';

export default function App() {
  return (
    <Router>
      <h1>AUTO QUOTE</h1>
      <AutoQuoteForm />
    </Router>
  );
}
