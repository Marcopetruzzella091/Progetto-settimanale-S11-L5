import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Searchpage() {
    const [Seachlist,setSeachlist ] = useState([])
    
    const { search } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        fetch('  https://striveschool-api.herokuapp.com/api/deezer/search?q='+search)
            .then(response => response.json())
            .then(json => setSeachlist(json.data))

          

            
    }, [search])

 

  return (<> 
  
    { <div class="row" >  {console.log(Seachlist)}
    <div class="col-10">
      <div id="rock">
        <h2>Search</h2>
        <div
          class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
          id="rockSection"
        >

          {Seachlist.map((e, Index)=> {if(Index<= 7 ){
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
  </div>}</>
  )
}
