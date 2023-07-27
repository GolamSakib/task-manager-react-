import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import Form from './components/Form';
import Navbar from './components/Navbar';

const App = () => {

  return (
    <div>
      <Navbar />
      <Form/>
    </div>
  );
};

export default App;
