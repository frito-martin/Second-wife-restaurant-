import './App.css'; // Import your global styles
import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Messages from './components/Reservations';
import AdminDashboard from './components/AdminDashboard';
import Appbar from './Appbar';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Menu />
        <Reservations />
        <AdminDashboard />
        <Appbar/>
      </main>
    </div>
  );
}

export default App;