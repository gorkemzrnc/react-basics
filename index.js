import React, { useState } from 'react';
import { render } from 'react-dom';
import Form from './Form';
import Counter from './Counter';

import './style.css';

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <Form />
      <br />
      <br />
      <hr />
      <br />
      {isVisible && <Counter />}
      <button onClick={() => setIsVisible(!isVisible)}>Göster/Gizle</button>
    </div>
  );
}

render(<App />, document.getElementById('root'));
