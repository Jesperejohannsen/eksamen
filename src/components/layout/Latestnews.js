import React, {useEffect, useState} from 'react'
import Image from 'react-bootstrap/Image'


// Her henter vi information fra vores API kald der hender data fra vores backend
import { hentAntalProdukter } from '../helpers/apikald'

const Latestnews = () => {
    //State
    const [senestenyt, setSenestenyt] = useState();
    //useEffect
    useEffect(() => {

        hentAntalProdukter().then(Response => setSenestenyt(Response))
    }, [])

    // Dette gør så de seneste nyheder bliver loadet på hjemmesiden. Derudover hvis der ikke er nogle nye informationer
    // vil den skrive loading
    let newList = <h2>Loading ....</h2>
    
    if (senestenyt && senestenyt.length) {
        
        newList = senestenyt.map(e => (

            <div className="col-12 col-md-4 col-lg-4" key={e._id}>
                <Image src={"http://localhost:5033/Images/" + e.image} alt="Bagerinyheder" roundedCircle />
                <h2 className="pt-4" style={{fontSize: "1rem", textTransform: "uppercase"}}>{e.titel}</h2>
                <p style={{fontSize: "0.8rem", color: "lightgrey"}} >{e.teaser}</p>
            </div>
        ))}
    return (
        <div>
            <h2 className="logo my-3">Vi skaber lækkert brød!</h2>
            <p style={{fontSize: "0.8rem", color: "lightgrey"}} className="mb-5">Der er mange tilgængelige udgaver af Lorem ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
            <div className="container"> 
                <div className="row my-5"> 
                    {newList}
                </div> 
            </div> 
        </div>
    )
}
export default Latestnews