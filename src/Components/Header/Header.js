import React from 'react';
import './Header.css'
import Logo from '../Footer/Fotos/Logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <section className="header">
                <Link to ="/">
                <img className="logoH" src={Logo}/>
                </Link>
                <p className="sf">SuperFy</p>
            </section>
            <article className="searchB">
                <h2 className="h2H">Greatest Albums of all time</h2>
            </article>
            <div id='paragraph'>
            <p>The Greatest of All-Time Billboard Hot 100 Artists rankings are based on weekly performance on the Hot 100.<strong>Have fun!</strong></p>
            </div>
        </div>
    );
}
export default Header;