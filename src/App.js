import React from 'react'
import Footwear from "./pages/footwear";
import { BrowserRouter as Router,Route,Routes }from 'react-router-dom';
import Men from './pages/men';
import Women from './pages/women';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Footwear/>}/>
          <Route path="/men" element={<Men/>}/>
          <Route path="/women" element={<Women/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
