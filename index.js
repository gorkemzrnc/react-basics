import React from 'react';
import { render } from 'react-dom';
import Form from './Form';

import './style.css';

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

render(<App />, document.getElementById('root'));
