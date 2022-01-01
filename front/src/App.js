import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">Shooper</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
        </header>
        <main>
          <Routes>
          <Route exact path="/product/:id" compnent={ProductScreen}></Route>
          <Route exact path="/" component={HomeScreen} ></Route>
          </Routes>
        </main>
        <footer className="row center">
            All rights are reserved
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
