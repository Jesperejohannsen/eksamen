import React from 'react'
import Maps from '../Images/maps.jpg'
import ContactForm from './Contactform'


const Contact = () => {

    return (
        <div className="container">
            <h2 className="logo my-5">Kontakt os</h2>
            <p style={{color: "lightgrey"}}className="my-5">Der er mange tilgængelige udgaver af Lorem ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
        <div className="row">
        <div className="col-12 col-lg-6 ">
            <ContactForm />
        </div>
        <div className="col-12 col-lg-6 mb-5 text-left">
            <p className="text-left"><span className="font-weight-bold">addresse:</span> Øster uttrup 1 9200 aalborg</p>
            <p className="text-left"><span className="font-weight-bold">telefon:</span> +45 25 26 95 40</p>
                 <img src={Maps} alt="google maps" />
        </div>
        </div>
        </div>
    )
}
export default Contact