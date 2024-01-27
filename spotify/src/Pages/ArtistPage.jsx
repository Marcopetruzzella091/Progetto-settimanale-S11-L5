import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ArtistPage() {
  const { id } = useParams();
  const [artist, setArtist] = useState({});

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${id}`);
        if (!response.ok) {
          throw new Error('Errore nella richiesta');
        }
        const json = await response.json();
        setArtist(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAlbum();
  }, [id]);






  return (
    <> 
   
   <div class="row">
            <div class="col-12 col-md-10 col-lg-10 mt-5">
              <h2 class="titleMain">{id&& id}</h2>
              <div id="followers"></div>
              <div class="d-flex justify-content-center" id="button-container">
                <button
                  class="btn btn-success mr-2 mainButton d-none"
                  id="playButton"
                >
                  PLAY
                </button>
                <button
                  class="btn btn-outline-light mainButton d-none"
                  id="followButton"
                >
                  FOLLOW
                </button>
              </div>
            </div>
          </div>


      <div className='row'>
      {artist.data && artist.data.map(e => (
        <div className="col-3 col-md-auto text-center mb-5">
          <a href={`/album_page.html?id=${e.album.id}`}>
            <img className="img-fluid" src={e.album.cover_medium} alt={e.title} />
          </a>
          <p>
            <a href="#">
              Track: {e.title.length < 16 ? e.title : `${e.title.substring(0, 16)}...`}
            </a>
            <br></br>
            <a href={`/album_page.html?id=${e.album.id}`}>
              Album: {e.album.title.length < 16 ? e.album.title : `${e.album.title.substring(0, 16)}...`}
            </a>
          </p>
        </div>
      ))} </div>
    </>
  );
}