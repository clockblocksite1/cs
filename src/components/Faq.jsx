import React from 'react'
import "./Faq.css"
import Header2 from './Header2';
import drodImg from './../img/PEACH.EU.png'
function Faq() {
  return (
    <div className='faq'>
        <Header2/>
        <div className='op'>
        <div className='dev'>Developers</div>
            <div className='pr'>Privacy policy</div>
            <div className='contact'>
            Contacts
            </div>
        <div className='beh'>Behavior rules</div>
            <div className='help'>Help</div>
            <div className='terms'>Terms of use</div>
        <div className='link'>Links</div>
        <div className='er'>PEACH.EU</div>
        <img src={drodImg} alt='' className='hip'/>
        </div>
          <div className='up'>
          <tr className='poti'/>
          <div className='bum'>PEACH is in beta testing. If you find any bugs, please report them to our email: official-peach@gmail.com</div>
            <div className='cl'>peach.eu © 2022-2024</div>
          </div>
    </div>
  )
}

export default Faq