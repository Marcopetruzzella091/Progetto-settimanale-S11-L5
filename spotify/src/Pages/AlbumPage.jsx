import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../actions';


export default function AlbumPage() {
  const { id } = useParams();
  const [album, setAlbum] = useState({});
  const [albumlist, setAlbumlist] = useState([])
  const playersong = useSelector(state=>state.playsong)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(playersong)
    
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
        <button id="btnPlay" className="btn btn-success" type="button" onClick={ ()=> dispatch(addUser(albumlist[0].title))}>
          Play
        </button>
      </div>
    </div> 
    </Col>
    <Col>
    <div>
    {albumlist.map( (e)=> <div>
            <div class="py-3 trackHover">
            <a href="#" class="card-title trackHover px-3 text-light" >{e.title}  <svg onClick={ ()=> dispatch(addUser(e.title))} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mx-2 bi bi-play-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
</svg> </a>
                <small class="duration text-light" >{    Math.floor(e.duration / 60) +":" + e.duration % 60} </small>
            </div></div>  )}



    </div>
    
    
    </Col>


    </Row>
    </Container> 
            
          
        </>


  );
}
