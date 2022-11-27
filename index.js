import React from 'react';
import { render } from 'react-dom';
import Form from './Form';
import Form2 from './Form2';

import './style.css';

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

render(<App />, document.getElementById('root'));
