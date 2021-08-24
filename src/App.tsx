import React from 'react';

import './App.css';
import HomePage from "./pages/HomePage";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";


function App() {
  return (
       <>
       <Header/>
        <div className="App">
            <Sidebar/>
          <header className="App-header">
              <HomePage/>
          </header>
        </div>
      </>
  );
}

export default App;
