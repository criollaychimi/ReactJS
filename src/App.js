import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <CartWidget />
        <ItemListContainer />
        <ItemCount></ItemCount>
        
      </header>
    </div>
  );
}

export default App;
