import React from "react";
import './App.css';

//  FIX NAME columns


function App() {
  return (
    <>
      <div className='wrapper'>
        <h1 className='title'>Welcome</h1>
        <div className='columns'>
          <div className='col'>
            <h2 className='desc'>to
              <span className='decor'> uewquewqueqwue</span> homepage
            </h2>
            <div className='content'>
              <div className='girls'>
                <video
                  muted autoplay="autoplay" loop playsinline
                  className='girl'>
                  <source src="images/angrygirl.webm" type="video/webm"/>
                </video>
                <video
                  muted autoplay="autoplay" loop playsinline
                  className='girl'>
                  <source src="images/whatgirl.webm" type="video/webm"/>
                </video>
                <video
                  muted autoplay="autoplay" loop playsinline
                  className='girl'>
                  <source src="images/eatgirl.webm" type="video/webm"/>
                </video>
                <video
                  muted autoplay="autoplay" loop playsinline
                  className='girl'>
                  <source src="images/crygirl.webm" type="video/webm"/>
                </video>
                <video
                  muted autoplay="autoplay" loop playsinline
                  className='girl'>
                  <source src="images/pffgirl.webm" type="video/webm"/>
                </video>
              </div>
              <div className='about-me'>
                <div className='con-items names'> 
                  <h3 className='item-name'>Email</h3>
                  <h3 className='item-name'>Github</h3>
                  <h3 className='item-name'>Discord</h3>
                  <h3 className='item-name'>Twitter</h3>
                  <h3 className='item-name'>This site< br/>is open source</h3>
                </div>
                <div className='con-items' style={{marginLeft: '30px'}}>
                  <h3 className='item-name decor'>qdissh@gmail.com</h3>
                  <h3 className='item-name'>
                    <a href='https://github.com/uewquewqueqwue'
                      target='_blank' rel='noreferrer'
                      className='decor'>uewquewqueqwue</a>
                  </h3>
                  <h3 className='item-name decor'>uewquewqueqwue#0609</h3>
                  <h3 className='item-name'>
                    <a href='https://twitter.com/uewquewqueqwue' 
                      target='_blank' rel='noreferrer' 
                      className='decor'>@uewquewqueqwue</a>
                  </h3>
                  <h3 className='item-name decor'>
                    <a href='https://github.com/uewquewqueqwue/uewquewqueqwue-homepage'
                      target='_blank' rel='noreferrer'
                      className='decor'>Code</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className='fonts'>
              <h3 className='decor' style={{marginBottom: '10px'}}>Fonts used</h3>
              <div className='division-line' />
              <div className='con-items'>
                <div className='font'>
                  <a href='https://fonts.google.com/specimen/Press+Start+2P?query=press' 
                    target='_blank' rel='noreferrer' 
                    style={{textDecoration: 'none'}}>Press Start 2P size 10 px</a>
                </div>
                <div className='font'>
                  <a href='https://fonts.google.com/specimen/Share+Tech+Mono?query=share'
                    target='_blank' rel='noreferrer' 
                    style={{textDecoration: 'none'}}>Share Tech Mono size 16 px</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col'>
            <h2 className='desc' style={{marginBottom: '36px'}}>Maybe you'll like it</h2>
            <div className='content'>
              <div className='up'>
                <h3 className='decor' style={{marginBottom: '10px', height: "9px"}}>My something</h3>
                <div className='division-line' />
                <div className='con-items'>
                  <h3 className='item-link'>
                    <a href='https://github.com/uewquewqueqwue/uew-UsefulGitHub' 
                      target='_blank' rel='noreferrer'>Useful links for you in<br />the Github environment</a>
                  </h3>
                  <h3 className='item-link'>
                    <a href='https://github.com/uewquewqueqwue/Basics-PostgreSQL-in-python'
                      target='_blank' rel='noreferrer'>Basics-Postgresql-in-Python</a>
                  </h3>
                  <h3 className='item-link'>
                    <a href='https://github.com/uewquewqueqwue/Basics-MS-Access-in-python'
                      target='_blank' rel='noreferrer'>Basics-MS-Access-in-Python</a>
                  </h3>
                </div>
              </div>
              <div className='down'>
                <h3 className='decor' style={{marginBottom: '10px'}}>You maybe interested</h3>
                <div className='division-line'/>
                <div className='con-items'>
                  <h3 className='item-link'>
                    <a href='https://github.com/neovim' target='_blank' rel='noreferrer'>Neovim</a></h3>
                  <h3 className='item-link'>
                    <a href='https://github.com/microsoft/vscode' target='_blank' rel='noreferrer'>Visual Studio Code</a></h3>
                  <h3 className='item-link'>
                    <a href='https://caninclude.glitch.me/' target='_blank' rel='noreferrer'>Caninclude</a></h3>
                  <h3 className='item-link'>
                    <a href='https://lottiefiles.com/' target='_blank' rel='noreferrer'>Lottiefiles</a></h3>
                  <h3 className='item-link'>
                    <a href='https://unicodeplus.com/' target='_blank' rel='noreferrer'>Unicodeplus</a></h3>
                  <h3 className='item-link'>
                    <a href='https://fonts.google.com/' target='_blank' rel='noreferrer'>Google Fonts</a></h3>
                </div>
              </div>
            </div>
            <h2 className='desc' style={{marginBottom: 0}}>Have a nice day</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
