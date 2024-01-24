import React from 'react'
import Topbar from './Topbar'
import Index from '../Pages/Index'
import AlbumPage from '../Pages/AlbumPage'
import ArtistPage from '../Pages/ArtistPage'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

export default function MainComponent() {
  return ( 
    <BrowserRouter>
   <div class="col-12 col-md-9 offset-md-3 mainPage">
        <Topbar/>
        <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/artist/:id" element={<ArtistPage/>} />
        <Route path="/album/:id" element={<AlbumPage />} />
        
        </Routes>
        </div>
        </BrowserRouter>
 
    )
}
