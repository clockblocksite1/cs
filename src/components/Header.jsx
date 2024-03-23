import React from 'react'
import "./Header.css";
import brodImg from './../img/chevrone.png';
import {Link} from 'react-router-dom'
export default function Header() {
  function downloadFile() {
    const fileUrl = 'https://www.youtube.com/watch?v=tWYsfOSY9vY&t=2s'; // Замените URL на URL вашего файла
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'file-name'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
  return (
    <div className='Header'>
        <div className=' Pead'>Peach</div>
        <img src={brodImg} alt='' className='br'/>
        <div className='header'>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
       <div>
        MAIN
       </div>
       <div className='tire'></div>
       </Link>
       <div>
        FINCTIONAL
       </div>
       <Link to="/FAQ" style={{ color: 'white', textDecoration: 'none' }}>
       <div>
        FAQ
       </div>
       </Link>
        </div>
        <div className='poc'>Eu
        </div>
        <button className='got'  onClick={downloadFile}>Download</button>
    </div>
  )
}
