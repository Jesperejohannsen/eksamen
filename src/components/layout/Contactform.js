import React, {useState} from 'react'
import { Link } from 'react-router-dom';


//Helper APIkald
import { sendKontaktbesked } from '../helpers/apikald'

const Contactform = () => {
    
      // Svaret man får fra severen efter man har postet, gemmer jeg her i
        const [svar, setSvar] = useState();

    const handleBesked = (e) => {
        e.preventDefault(); //forhindre submit i at genindlæse siden/component
        
        sendKontaktbesked(e.target).then(response => {
            setSvar(response);          
        })
         // Tømmer input felterne
         e.target.reset();
    }
     // Besked om de er succesfuldt tilmeldt
  let svarbesked;
  if (svar) {
    svarbesked = (
      <div
        className="w-100 bg-secondary text-white p-4 position-absolute"
        style={{ zIndex: "1000", left: "50%" }}
      >
        <h2>Du har sendt flg:</h2>
        <p>Navn: {svar.kontakt.navn}</p>
        <p>Email: {svar.kontakt.email}</p>
        <p>Emne: {svar.kontakt.emne}</p>
        <p>Besked: {svar.kontakt.besked}</p>

        <Link className="btn text-white" to="/">
          Gå til forsiden
        </Link>
      </div>
    );
}
  return (
    <div>
        <form onSubmit={handleBesked}>
          {svarbesked}
            <div className="form-group">
              <input style={{color: "lightgrey"}}className="form-control" type="text" name="navn" placeholder="Dit navn..." required />
            </div>
            <div className="form-group">
              <input style={{color: "lightgrey"}} className="form-control" type="email" name="email" placeholder="Din e-mail..." required />
            </div>
            <div className="form-group">
              <input style={{color: "lightgrey"}}className="form-control" type="text" name="emne" placeholder="Din besked..." required />
            </div>
            <div className="form-group">
              <textarea className="form-control" name="besked" rows="10"></textarea>
            </div>
              <button type="submit" className="btn mb-2 contactbutton">Send</button>
            </form>
    </div>
    )
}
export default Contactform