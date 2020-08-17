import React from 'react';
import './Footer.css'
import face from './Fotos/face.png'
import ins from './Fotos/ins.jpeg'
import link from './Fotos/link.webp'
import snap from './Fotos/snap.png'
import twitt from './Fotos/twitt.png'
import what from './Fotos/what.png'
import Logo from './Fotos/Logo.png'



const Footer = () => {
    return ( 
        <footer>
        <section className='flex'>
            <article className='width'>
            <p className='pHead'>GET IN TOUCH</p>
            <form action="">
                <input className='input' type="text" name="" id="email" placeholder='Email'/>
                <input className='input' type="text" name="" id="frage" placeholder='Name'/><br/>
                <input className='beschreibung' type="text" name="beschrebung" id="" placeholder='Nachricht'/><br/>
                <input className='submit' type="submit" value="submit"/>
            </form>
            </article>
            <article className='media'>
                <p className='pHead1'>FOLLOW</p>
                <div className='grid'>
                    <img className='imgB rahmen' src={face} alt=""/>
                    <img className='imgB rahmen' src={ins} alt=""/>
                    <img className='imgB rahmen' src={link} alt=""/>
                    <img className='imgB rahmen' src={snap} alt=""/>
                    <img className='imgB rahmen' src={twitt} alt=""/>
                    <img className='imgB rahmen' src={what} alt=""/>
                </div>
            </article>
        </section>
        <article className='footerTail'>
            <div className='tail'>
                <p>© All rights reserved</p><span className='spano inline'>|</span>
                <p className='left'>Design: SuperFY</p>
            </div>
            <img className='logo' src={Logo} alt=""/>
        </article>
    </footer>
     );
}
 
export default Footer;