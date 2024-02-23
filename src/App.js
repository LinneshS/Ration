import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import Vellalore from './Area/vellalore';
import Lgnagar from './Area/lgnagar';
function App() {
  return (
      <Router>
        <Routes>


          <Route path='/' element={<Home/>}/>
          <Route path='/vellalore' element={<Vellalore/>}/>
          <Route path='/lgnagar' element={<Lgnagar/>}/>
                                                             
        </Routes>

      </Router>
          
  );
}

export default App;
