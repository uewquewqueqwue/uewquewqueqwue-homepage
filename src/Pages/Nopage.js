import React from "react";
import { Link } from "react-router-dom";
import './Notfound.css';

function Nopage() {
  return (
    <>
      <div className='notfound_wrap'>
        <div className='notfound_content'>
          <video
            muted autoplay="autoplay" loop playsinline
            style={{width: "800px", height: '470px', marginBottom: "50px"}}>
            <source src="images/goblin.webm" type="video/webm"/>
          </video>
          <h1>Sorry page not found</h1>
          <div style={{
              display: 'flex', 
              maxWidth: '500px', 
              minWidth: '250px',
              justifyContent: 'space-between'}}>
            <h3>Back to <Link to='/' className='decor'>home</Link></h3>
            <h3>
              <a href='https://twitter.com/Gaziter/status/1111689353426845697' 
                target='_blank' rel="noreferrer"
                className='decor'>Author</a> this GIF
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nopage;