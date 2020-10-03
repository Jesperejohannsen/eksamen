import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// KAlder APIET
import { tilmeldNyheder } from '../helpers/apikald'

const News = () => {

// Her bruger vi state til at tilmelde

const [besked, setBesked] = useState()

    const handleSend = async (e) => {
    
        e.preventDefault();
        // Hermed gør vi at hvis vi trykker på e-target hvilket er vores knap, så fremviser den vores input
        tilmeldNyheder(e.target).then(response => {
            if (response !== "error") {
                console.log(response);
                setBesked("Tak for din tilmelding")  
            }
        })}
return (
   
    <div className="bg-img">
        <section className="newsletter">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                    <h2 className="logo text-light text-left tekst">Tilmeld dig vores nyhedsbrev</h2>
                    <p style={{fontSize: "0.8rem", color: "lightgrey"}} className="text-light text-left tekst">Der er mange tilgængelige udgaver af Lorem ipsum, men de fleste udgaver</p>
                        <div className="content">
                            {
                                besked ? <p> {besked} </p>
                                 :
                                <form className="input-group" onSubmit={handleSend}>
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><FontAwesomeIcon icon="envelope" /></div>
                                </div>
                                <input type="email" name="email" className="form-control" placeholder="Indtast din email..." required />
                                <span className="input-group-btn">
                                    <button style={{fontSize: "0.8rem"}}className="btn" type="submit">TILMELD</button>
                                </span>    
                                </form>
                            }                
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)}
export default News