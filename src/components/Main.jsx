import React from 'react'
import "./Main.css";
import Header from './Header';
import romImg from './../img/cheat-menu-img.png';
import ctyImg from './../img/background31.png';
import dropImg from './../img/PEACH.EU.png'
export default function Main() {
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
    <div className='Main'>
        <div className='bg'>
     <Header/>
    <div className='main'>PEACH.EU</div>
    <div className='in'>In our <b>free software,</b> you will be able to find all </div>
    <div className='the'>the latest features and settings. Configuring aim </div>
    <div className='is'>is <b>quick and easy</b>.</div>
    </div>
    <div className='bg2'>
        <img src={romImg} alt='' className='drot'/>
        <div className='hot'>Convenient website</div>
        <div className='hot2'>Our developers have tried to make the </div>
        <div className='hot3'>design simple and clear.</div>
        <div className='hot4'>Extensive functionality</div>
        <div className='hot5'>The pleasure of the game will increase many times due</div>
        <div className='hot6'>to the abundance of interesting visual possibilities!</div>
        <div className='hot7'>Customizable appearance</div>
        <div className='hot8'>You can easily customize the appearance of </div>
        <div className='hot9'>the game to suit your tastes.</div>
        <div className='hot10'>Responsive technical support</div>
        <div className='hot11'>Our support service is always ready to </div>
        <div className='hot12'>answer any question and help in any </div>
        <div className='hot13'>situation. </div>
        <div className='hot14'>We are open to the community</div>
        <div className='hot15'>Interesting idea? Found a bug? Write to </div>
        <div className='hot16'>us!</div>
        <div className='hot17'>Unique design</div>
        <div className='hot18'>Our products have a nice and user-friendly</div>
        <div className='hot19'>design. Ease of use for everyone.</div>
        <div className='hot20'>Functional</div>
        <img src={ctyImg} alt='' className='bot'/>
        <div className='kol'></div>
        <tr className='opt'/>
        <div className='cloud'>Cloud Radar</div>
        <div className='progr'>Do you have friends who have not yet purchased our  </div>
        <div className='progr2'>program? Give them a link to the cloud radar, which </div>
        <div className='progr3'>they can open on their computer and see most of the </div>
        <div className='progr4'>movements of their opponents.</div>
        <div className='kol2'></div>
        <tr className='opt2'/>
        <div className='cloud2'>Smart aimbot</div>
           <div className='progr5'>A smart aimbot that is very easy and quick to set up. </div>
           <div className='progr6'>You no longer have to specify incomprehensible "fovs" </div>
           <div className='progr7'>and "smoochies". Just set the "non-flammable" level. </div>
           <div className='kol3'></div>
        <tr className='opt3'/>
           <div className='cloud3'>Backtracking</div>
           <div className='progr8'>You can hit enemies by shooting where they were  </div>
           <div className='progr9'>200ms ago. Aimbot is fully compatible with this feature</div>
           <div className='progr10'>and will take into account the rollback in time when </div>
           <div className='progr11'>aiming. </div>
           <div className='kol4'></div>
        <tr className='opt4'/>
           <div className='cloud4'>Minigames</div>
           <div className='progr12'>Small games that can help you pass the warm-up or  </div>
           <div className='progr13'>timeout :)</div>
           <div className='kol01'></div>
        <tr className='opt01'/>
           <div className='cloud01'>Inventory</div>
        <div className='progr01'>Add any items to your inventory and select any of them </div>
        <div className='progr02'>during the game. Other Peach users will also be able to </div>
        <div className='progr03'>see the skins you have selected! </div>
        <div className='kol03'></div>
        <tr className='opt03'/>
           <div className='cloud02'>Binds</div>
        <div className='progr04'>Absolutely any checkbox in our software can be turned  </div>
        <div className='progr05'>on and off using the buttons on the keyboard. Available </div>
        <div className='progr06'>actions: enable/disable with a single keystroke, enable/ </div>
        <div className='progr07'>disable while holding down the key. </div>
        <div className='kol04'></div>
        <tr className='opt04'/>
           <div className='cloud03'>Lobby</div>
        <div className='progr08'>Change ranks, spam errors, write in red in the chat, and </div>
        <div className='progr09'>even make a thousand windows pop up for everyone in </div>
        <div className='progr101'>the lobby! </div>
        <div className='kol05'></div>
        <tr className='opt05'/>
           <div className='cloud04'>Bypass recording</div>
        <div className='progr081'>Our software is not visible in recording and streaming  </div>
        <div className='progr091'>programs (such as OBS). </div>
        </div>
        <div className='bg3'>
        <div className='title'>
        Counter-Strike 2
        </div>
        <div className='pea'>
        PEACH for CS2. Available now.
        </div>
        <button className='btn2'  onClick={downloadFile} >
    DOWNLOAD CHEAT
</button>
        <button className='btn3'>Instructions</button>
        </div>
        <div className='bg4'>
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
        <img src={dropImg} alt='' className='hip'/>
        </div>
        <div className='ert'>
        <tr className='poti'/>
            <div className='bum'>PEACH is in beta testing. If you find any bugs, please report them to our email: official-peach@gmail.com</div>
            <div className='cl'>peach.eu © 2022-2024</div>
        </div>
    </div>
  )
}
