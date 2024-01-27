import React, { useEffect, useState } from 'react';
import Topbar from './Topbar'
import Index from '../Pages/Index'
import AlbumPage from '../Pages/AlbumPage'
import ArtistPage from '../Pages/ArtistPage'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Searchpage from '../Pages/Searchpage';
import NavBarComponent from './NavBarComponent';
import FooterNavbarComponent from './FooterNavbarComponent';





export default function MainComponent() {
  



  return ( <>
    <BrowserRouter>
        <NavBarComponent/>
        <div class="col-9 col-md-9 offset-md-3 mainPage">
        <Topbar/>
        <Routes>
        
        <Route path="/" element={<Index />} />
        <Route path="/search/:search" element={<Searchpage />}  />
        <Route path="/artist/:id" element={<ArtistPage/>} />
        <Route path="/album/:id" element={<AlbumPage />} />
        
        </Routes>
        
        </div>
        </BrowserRouter>
      <FooterNavbarComponent/></>
    )
}
