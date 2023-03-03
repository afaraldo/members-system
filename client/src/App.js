import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPerson from './views/people/Main';
import CreatePerson from './views/people/Create';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPerson/>}/>
            <Route path="/people/:person_id" element={<MainPerson/>}/>
            <Route path="/people/new" element={<CreatePerson/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;