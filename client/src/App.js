import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainProject from './views/projects/Main';
import CreateProject from './views/projects/Create';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainProject/>}/>
            <Route path="/projects/new" element={<CreateProject/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;