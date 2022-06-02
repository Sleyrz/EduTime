import {useRef} from "react";
import {FaBars,FaTimes} from 'react-icons/fa'

import "../Styles/main.css"

function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <nav ref={navRef}>
                <a href="/#"> Strona główna </a>
                <a href="/#"> Nasze kursy</a>
                <a href="/#"> Nauczyciele</a>
                <a href="/#"> Cennik</a>
                <a className="blue-btn" href="/#" > Dołącz do nas</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
    
}
export default Navbar;