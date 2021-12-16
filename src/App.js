import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList';
import Item from './components/Item';

function App() {

  const [state, setState] = useState([])
  const API = new Promise((resolve, reject)=>{
    setTimeout(()=>{
    
     setState({Item})
     resolve(true)},3000)
  })

  const array = {Item};

  return (
    <div className="App">
      <header className="App-header">
        <NavBar>
          <CartWidget />
          <ItemListContainer>
            <ItemList>
              {array.map()}
           </ItemList>
          </ItemListContainer>
          <ItemCount></ItemCount>
        </NavBar>
        
      </header>
    </div>
  );
}

export default App;
