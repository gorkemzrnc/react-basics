import React from 'react';
import { render } from 'react-dom';
import Form from './Form';
import Counter from './Counter';

import './style.css';

function App() {
  return (
    <div>
      <Form />
      <br />
      <br />
      <hr />
      <br />
      <Counter />
    </div>
  );
}

render(<App />, document.getElementById('root'));
