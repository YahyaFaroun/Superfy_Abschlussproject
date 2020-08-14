import React from 'react';
import './Footer.css'
import face from './Fotos/face.png'
import ins from './Fotos/ins.jpeg'
import link from './Fotos/link.webp'
import snap from './Fotos/snap.png'
import twitt from './Fotos/twitt.jpg'
import what from './Fotos/what.png'



const Footer = () => {
    return ( 
        <footer>
            <section className='flex'>
                <article className='width'>
                <p>GET IN TOUCH</p>
                <form action="">
                    <input className='input' type="text" name="" id="email" placeholder='Email Adresse'/>
                    <input className='input' type="text" name="" id="frage" placeholder='Deine Frage'/><br/>
                    <input className='beschreibung' type="text" name="beschrebung" id="" placeholder='Beshreibung'/><br/>
                    <input className='submit' type="submit" value="submit"/>
                </form>
                </article>
                <article>
                    <p>FOLLOW</p>
                    <div className='grid'>
                        <div className='rahmen'><img src={face} alt=""/></div>
                        <div className='rahmen'><img src={ins} alt=""/></div>
                        <div className='rahmen'><img src={link} alt=""/></div>
                        <div className='rahmen'><img src={snap} alt=""/></div>
                        <div className='rahmen'><img src={twitt} alt=""/></div>
                        <div className='rahmen'><img src={what} alt=""/></div>
                    </div>
                </article>
            </section>
        </footer>
     );
}
 
export default Footer;