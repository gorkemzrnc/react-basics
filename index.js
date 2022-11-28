import React, { useState, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Form from './Form';
import Counter from './Counter';
import Users from './Users';

import './style.css';

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <Users />
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
