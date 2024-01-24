import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Homedefaulcomponent() {


    const [rocklist,setRocklist ] = useState([])
    const [Poplist, setPoplist ] = useState([])
    const [Popculture, setPopculture ] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        fetch('  https://striveschool-api.herokuapp.com/api/deezer/search?q=Rock')
            .then(response => response.json())
            .then(json => setRocklist(json.data))

            fetch('  https://striveschool-api.herokuapp.com/api/deezer/search?q=Pop')
            .then(response => response.json())
            .then(json => setPoplist(json.data))

            fetch('  https://striveschool-api.herokuapp.com/api/deezer/search?q=Popculture')
            .then(response => response.json())
            .then(json => setPopculture(json.data))

            
    }, [])






  return (
    <>
   
    <div class="row">
            <div class="col-10">
              <div id="searchResults" >
                <h2>Search Results</h2>
                <div
                  class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                ></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-10">
              <div id="rock">
                <h2>Rock Classics</h2>
                <div
                  class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="rockSection"
                >

                 {rocklist.map((e, Index)=> {if(Index<= 7 ){
                 return (
                 <div class="col text-center" id={e.id}>
              <a href=''>
              <img class="img-fluid" src={e.album.cover_medium} alt="1" onClick={() => navigate('/album/'+ e.album.id)}></img>
              </a>
            <p>
              <div   onClick={() => navigate('/album/'+ e.album.id)}>
                Album: {e.album.title}<br></br>
              </div>
              <div   onClick={() => navigate('/artist/'+ e.artist.id)}>
                Artist: {e.artist.name}
              </div>
            </p>
          </div>)}  }  ) }

                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-10">
              <div id="pop">
                <h2>Pop Culture</h2>
                <div
                  class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="popSection"
                >
                  {Poplist.map((e, Index)=> {if(Index<= 7 ){
                 return (
                 <div class="col text-center" id={e.id}>
            <a href="/album_page.html?id=51350192">
              <img class="img-fluid" src={e.album.cover_medium} alt="1"></img>
            </a>
            <p>
              <a href="/album_page.html?id=51350192">
                Album: {e.album.title}<br></br>
              </a>
              <a href="/artist_page.html?id=210">
                Artist: {e.artist.name}
              </a>
            </p>
          </div>)}  }  ) }


                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-10">
              <div id="hiphop">
                <h2>#HipHop</h2>
                <div
                  class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="hipHopSection"
                >
 {Popculture.map((e, Index)=>  {if(Index<= 7 ){
                 return (
                 <div class="col text-center" id={e.id} key={e.id}>
            <a href="/album_page.html?id=51350192">
              <img class="img-fluid" src={e.album.cover_medium} alt="1"></img>
            </a>
            <p>
              <a href="/album_page.html?id=51350192">
                Album: {e.album.title}<br></br>
              </a>
              <a href="/artist_page.html?id=210">
                Artist: {e.artist.name}
              </a>
            </p>
          </div>)}  }  ) }

                  
                </div>
              </div>
            </div>
          </div></>
  )
}
