import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {

  return (
    <div className='font-mono'>
        <Header />
        <Outlet />
    </div>
  );
}

export default App;
