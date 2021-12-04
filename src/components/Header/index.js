import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png" alt="netflix" />
                </a>
            </div>
            <div className="header--user">
                <a herf="/">
                    <img src="https://occ-0-2352-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdadFY5H1dRsUl7R3ol6ZIwUrkIWf0vJWDIPNQ2CefFBwhZ8utJ7J7bCIrqJAX97rGLlWrbMGezxI_9lASukdDj49xkx.png?r=9cc" alt="icone-usuario" />
                </a>
            </div>
        </header>
    );
}