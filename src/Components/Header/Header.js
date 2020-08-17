import React from 'react';
import './Header.css'
<<<<<<< HEAD

import './Header.css'
=======
import Logo from '../Footer/Fotos/Logo.png'
>>>>>>> 5a0245c5792040cb396c3e5178ee0abf4b5c7d31
const Header = () => {
    return (
        <div>
            <section className='header'>
                <img className='logoH' src={Logo} alt=""/>
                <p className='sf'>SuperFy</p>
                <div className='div'></div>
                <p className='charts'>Charts</p>
            </section>
            <article className='searchB'>
                <div className='container'>
                    <p className='top'>TOP XX</p>
                    <p className='top'>VIRAL 50</p>
                </div>
            <article className='searchA'>
                <form className='in' action="">
                    <input type="text" name="" id="input" placeholder='Search by keyword or item...'/>
                    <input className='butt' type="submit" value="SEARCH"/>
                </form>
            </article>
            </article>
            <div id="paragraph">
            <p id="abdpara1">Die CHARTS TOP Fy  vom 13.08.2020 sind online.Alle Neueinsteiger
                in den Charts findest du in der Übersicht.Wir freuen uns, wenn du auch
                diese Woche wieder deine Top-Charts tippst.Zahlreiche Neueinsteiger haben es in die Top Fy geschafft.
            </p>
            </div>
        </div>
    );
}
export default Header;