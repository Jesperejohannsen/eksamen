import React from 'react'
import '../../App';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {

    let history = useHistory();

    const handleSearch = (e) => {

        e.preventDefault();
        console.log(e.target.soeg.value);    
        // Når vi søger bliver vi derefter sendt til vores søgeside
        history.push("/soegning/" + e.target.soeg.value)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-gradient-primary">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ml-5 justify-content-center" id="navbarNav">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item active">
                        <Link className="nav-link text-light" style={{fontSize: "0.8rem"}} to="/">Forside</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" style={{fontSize: "0.8rem"}} to="/produkter">Produkter</Link>
                    </li>
                    <Link className="navbar-brand mx-3 logo text-light" to="/"><h1>bageriet</h1></Link>
                    <li className="nav-item">
                        <Link className="nav-link text-light"  style={{fontSize: "0.8rem"}}to="/kontakt">Kontakt</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light"  style={{fontSize: "0.8rem"}}to="/login">Login</Link>
                    </li>
                </ul>
            </div>
            <form onSubmit={handleSearch}>
                <input name="soeg" placeholder="Søg her!" type="search" />
                <button className="searchbutton" type="submit"><FontAwesomeIcon icon="search" /></button>
            </form>
        </nav>
    )
}
export default Navbar