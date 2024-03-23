import React from 'react'
import "./Header2.css";
import bromImg from './../img/chevrone.png';
import { Link } from 'react-router-dom';
import fogImg from './../img/background31.png';
import { useState } from 'react';
function Header2() {
  const [activePage, setActivePage] = useState('MAIN');

  return (
    <div className='he'>
      <tr className='width'/>
       <div className='brom'>
       PEACH
       </div>
       <div className='top'>
        <Link to="/" onClick={() => setActivePage('MAIN')}  className={activePage === 'MAIN' ? 'active' : ''} style={{ color: 'white', textDecoration: 'none' }}>
         <div>MAIN</div>
         </Link>
         <Link  onClick={() => setActivePage('MENU')} className={activePage === 'MENU' ? 'active' : ''} style={{ color: 'white', textDecoration: 'none' }}>
         <div>MENU</div>
         </Link >
         <div>FAQ</div>
       </div>

       <div className='ew'>Eu
       <img src={bromImg} alt='' className='br2'/>
       
       </div>
       <div className='what'>
       What operating systems are supported?
       </div>
       <img src={fogImg} alt='' className='fog'/>
       <div className='we'>— We guarantee support for Microsoft officially supported stable (not insider preview) </div>
       <div className='ver'>versions of Windows 10 and Windows 11 released after 2017.</div>
       <div className='what2'>What happens if the game gets an update and the program stops working?</div>
       <div className='our'>— Our software should work after the game update, but if a major update comes out</div>
       <div className='and'>and something breaks, our developers will fix it as quickly as possible.</div>
       <div className='wq'>Is there a free trial?</div>
       <div className='at'>— At the moment, our software is completely free</div>
       <div className='what3'>What operating systems are supported?</div>
       <div className='we2'>— We guarantee support for Microsoft officially supported stable (not insider preview)</div>
       <div className='ver2'>versions of Windows 10 and Windows 11 released after 2017.</div>
    </div>
  )
}

export default Header2