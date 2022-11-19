import React from 'react';
import Modal from './Modal';
import Sidebar from './Sidebar';
import Home from './Home';
import { ModalCotext } from './context.js';

function App() {
  return (
    <ModalCotext>
      <Home />
      <Modal />
      <Sidebar />
    </ModalCotext>
  );
}

export default App;
