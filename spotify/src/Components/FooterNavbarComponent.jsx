import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function FooterNavbarComponent() {
  const playersong = useSelector(state => state)

  return (
<>
   
     
    <div class="container-fluid fixed-bottom bg-container pt-1">
    
    <div class="row">
      
      
      <div class="col-lg-10 offset-lg-2">
        <div class="row">
        
          {console.log(playersong)}
          
          <div
            class="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1 d-flex"
          >  {(playersong.cover !== "")  ? <img  className='mr-1' src={playersong.cover} width={"32px"} height={"32px"} alt="" /> : ""}
           
            <div class="row">
            <span className='text-white'> 
  {playersong.playsong}  {    Math.floor(playersong.duration / 60) +":" + playersong.duration % 60}    </span>
              <div class="col">
              <a href="#">
                <img src="/Shuffle.png" alt="shuffle" />
              </a></div>
              <div class="col">
              <a href="#">
                <img src="/Previous.png" alt="shuffle" />
              </a></div><div class="col">
              <a href="#">
                <img src="/Play.png" alt="shuffle" />
              </a></div><div class="col">
              <a href="#">
                <img src="/Next.png" alt="shuffle" />
              </a></div><div class="col">
              <a href="#">
                <img src="/Repeat.png" alt="shuffle" />
              </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center playBar py-3">
          <div class="col-8 col-md-6">
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
              
            </div>
          </div>
        </div>
      </div>
    </div>


    

    
  </div></>
  )
}
