import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AlbumPage() {
  const { id } = useParams();
  const [album, setAlbum] = useState({});
  const [albumlist, setAlbumlist] = useState([])

  useEffect(() => {
    
    const fetchAlbum = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`);
        if (!response.ok) {
          throw new Error('Errore nella richiesta');
        }
        const json = await response.json();
        setAlbum(json);
        setAlbumlist(json.tracks.data)
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchAlbum();
  }, [id]);
  
console.log( albumlist)


  return (<> <Container> <Row> <Col>
  /*   <div className='d-flex flex-column'>
      <img src={album.cover} className="card-img img-fluid m-auto" alt="Album" />
      <div className="mt-4 text-center">
        <p className="album-title">{album.title}</p>
      </div>
      <div className="text-center">
        <p className="artist-name">{album.artist?.name}</p>
      </div>
      <div className="mt-4 text-center">
        <button id="btnPlay" className="btn btn-success" type="button">
          Play
        </button>
      </div>
    </div> 
    </Col>
    <Col>
    <div>
    {albumlist.map( (e)=> <div>
            <div class="py-3 trackHover">
                <a href="#" class="card-title trackHover px-3 text-light" >{e.title}</a>
                <small class="duration text-light" >{    Math.floor(e.duration / 60) +":" + e.duration % 60} </small>
            </div></div>  )}



    </div>
    
    
    </Col>


    </Row>
    </Container> 
            
           {/*  <div class="py-3 trackHover">
            <a href="#" class="card-title trackHover px-3" style="color:white" >${
              track.title
            }</a>
            <small class="duration" style="color:white">${Math.floor(
              parseInt(track.duration) / 60 // setting the duration minutes
            )}:${
      parseInt(track.duration) % 60 < 10
        ? "0" + (parseInt(track.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
        : parseInt(track.duration) % 60
    }</small>
        </div> */}
        </>


  );
}
