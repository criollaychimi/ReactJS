import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <CartWidget />
        <ItemListContainer />

        
      </header>
    </div>
  );
}

export default App;
