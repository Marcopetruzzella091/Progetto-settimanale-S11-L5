import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, addprefer, delprefer } from '../actions';

export default function AlbumPage() {
  const { id } = useParams();
  const [album, setAlbum] = useState({});
  const [albumlist, setAlbumlist] = useState([]);
  const playersong = useSelector(state => state);
  const dispatch = useDispatch();



  const preferiti  = useSelector(state=>state.favourite)
  useEffect(() => {
    console.log(preferiti);

    const fetchAlbum = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`);
        if (!response.ok) {
          throw new Error('Errore nella richiesta');
        }
        const json = await response.json();
        setAlbum(json);
        setAlbumlist(json.tracks.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAlbum();
  }, [id]);

  console.log(albumlist);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className='d-flex flex-column'>
              <img src={album.cover} className="card-img img-fluid m-auto" alt="Album" />
              <div className="mt-4 text-center">
                <p className="album-title">{album.title}</p>
              </div>
              <div className="text-center">
                <p className="artist-name">{album.artist?.name}</p>
              </div>
              <div className="mt-4 text-center">
                <button id="btnPlay" className="btn btn-success" type="button" onClick={() => dispatch(addUser(albumlist[0]))}>
                  Play
                </button>
              </div>
            </div> 
          </Col>
          <Col>
            <div>
              {albumlist.map((e) => (
                
                <div key={e.id}> 
                
                 {(! playersong.favourite.find( c => c === e.title)) ? (<svg  onClick={() => dispatch(addprefer(e))} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
              </svg>) : (<svg  onClick={() => dispatch(delprefer(e))} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>) }
                
                

             


                  <div className="py-3 trackHover"> {}
                    <a href="#" className="card-title trackHover px-3 text-light" onClick={() => dispatch(addUser(e))}>
                      {e.title}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mx-2 bi bi-play-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>
                      </svg>
                    </a>

                    <small className="duration text-light">
                      {Math.floor(e.duration / 60) + ":" + e.duration % 60}
                    </small>
                  </div> 
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
