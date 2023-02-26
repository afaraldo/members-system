import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/products/Main';
import Detail from './views/products/Detail';
import Update from './views/products/Update';

import MainArtist from './views/artists/Main';
import DetailArtist from './views/artists/Detail';
import UpdateArtist from './views/artists/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/products/" element={<Main/>}/>
          <Route path="/products/:productId" element={<Detail/>} />
          <Route path="/products/:productId/edit" element={<Update/>} />

          <Route path="/artists/" element={<MainArtist/>}/>
          <Route path="/artists/:artistId" element={<DetailArtist/>} />
          <Route path="/artists/:artistId/edit" element={<UpdateArtist/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;