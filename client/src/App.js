import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainArtist from './views/artists/Main';
import DetailArtist from './views/artists/Detail';
import CreateArtist from './views/artists/Create';
import UpdateArtist from './views/artists/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/artists/" element={<MainArtist/>}/>
          <Route path="/artists/new" element={<CreateArtist/>}/>
          <Route path="/artists/:artistId" element={<DetailArtist/>} />
          <Route path="/artists/:artistId/edit" element={<UpdateArtist/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;