
import { GlobalStyle } from './globalStyles';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from './pages/Home';
import React from 'react';

const App =() => {
  return (
  <Router>
    <GlobalStyle/>
    <Routes>
      <Route path={'/'} element={<Home/>}> </Route>
    </Routes>
  </Router>
    
  );
}

export default App;
