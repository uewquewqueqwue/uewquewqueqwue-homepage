import React from "react";
import './App.css';

function App() {
  return (
    <>
      <section className='wrapper'>
        <div className='test'>
          <h1>
            Welcome
          </h1>
          <div className='colums'>
            <div className='col-1'>
              <div className='el-up'>
              <h2>to <name className='decor' style={{whiteSpace: 'nowrap'}}>uewquewqueqwue</name> homepage</h2>
              </div>
              <div className='division-line' />
              <div className='about-us'>
                <div className='about-us-items'>
                  <h3 className='items-name'>EMAIL</h3>
                  <h3 className='items-name'>GITHUB</h3>
                  <h3 className='items-name'>DISCORD</h3>
                  <h3>TWITTER</h3>
                </div>
                <div className='about-us-items'>
                  <h3 className='items-name decor'>qdissh@gmail.com</h3>
                  <h3 className='items-name'>
                    <a
                      href='https://github.com/uewquewqueqwue'
                      target='_blank'
                      className='decor'
                      style={{textDecoration: 'none'}}>uewquewqueqwue</a>
                  </h3>
                  <h3 className='items-name decor'>uewquewqueqwue#0609</h3>
                  <h3>
                    <a 
                      href='https://twitter.com/uewquewqueqwue' 
                      target='_blank'
                      className='decor' 
                      style={{textDecoration: 'none'}}>@uewquewqueqwue</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className='col-2'>
              <h2 style={{marginBottom: '36px'}}>Maybe you'll like it</h2>
              <h4 className='decor' style={{marginBottom: '10px'}}>My something</h4>
              <div className='division-line' />
              <div className='links-items'>
                <a href='https://github.com/uewquewqueqwue/uew-UsefulGitHub' 
                  target='_blank' className='items-link' style={
                  {width: '300px', whiteSpace: 'normal', lineHeight: '16px'}
                  }>USEFUL LINKS FOR FOR YOU IN THE GITHUB ENVIRONMENT</a>
                <a 
                  href='https://github.com/uewquewqueqwue/Basics-PostgreSQL-in-python'
                  target='_blank' className='items-link'>BASICS-POSTGRESQL-IN-PYTHON</a>
                <a 
                  href='https://github.com/uewquewqueqwue/Basics-MS-Access-in-python'
                  target='_blank' style={{marginBottom: '36px'}} >BASICS-MS-ACCESS-IN-PYTHON</a>
              </div>
              <h4 className='decor' style={{marginBottom: '10px'}}>My something</h4>
              <div className='division-line' />
              <div className='links-items' style={{marginBottom: '60px'}}>
                <a href='https://github.com/neovim' target='_blank' className='items-link'>NEOVIM</a>
                <a href='https://github.com/microsoft/vscode' target='_blank' className='items-link'>VISUAL STUDIO CODE</a>
                <a href='https://lottiefiles.com/' target='_blank' className='items-link'>LOTTIEFILES</a>
                <a href='https://unicodeplus.com/' target='_blank' className='items-link'>UNICODEPLUS</a>
                <a href='https://fonts.google.com/' target='_blank' style={{marginBottom: '60px'}} >GOOGLE FONTS</a>
              </div>
              <h2>Good day to you</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
