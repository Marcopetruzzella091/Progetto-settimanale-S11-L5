import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ArtistPage() {
  const { id } = useParams();
  const [artist, setArtist] = useState({});

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`);
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

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`);
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






  return (<>
    <div class="col-sm-auto col-md-auto text-center mb-5">
             <a href="/album_page.html?id=${songInfo.album.id}">
              <img class="img-fluid" src={artist.picture_medium } alt="1" />
            </a>
            <p>
              <a href="#">
               
                  
            Name:         {artist.name}`
                    
                
              </a><br></br>
              {/* <a href="/album_page.html?id=${songInfo.album.id}">
                Album: {
                  artist.album.title.length < 16
                    ? `${artist.album.title}`
                    : `${artist.album.title.substring(0, 16)}...` // setting the track title, if it's longer than 16 chars cuts the rest
                }"
              </a> */}
            </p> 
          </div>{console.log(artist)}</>
  )
              }
