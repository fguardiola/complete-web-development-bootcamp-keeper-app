import React from 'react';

function Footer(){
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <footer>
            <p>Copiright ⓒ Fernando Guardiola {currentYear}</p>
        </footer>
    )
}


export default Footer;