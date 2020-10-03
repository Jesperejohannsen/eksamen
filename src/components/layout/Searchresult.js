import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'

// helper - apikald
import { soegProdukt } from '../helpers/apikald'


const Searchresult = (props) => {

    console.log(props.match.params.soegeordet);

    //Her sender vi en useState afsted som sender over til API'et
    const [soege, setSoege] = useState()

    // Her kalder vi så API'et
    useEffect(() => {
         soegProdukt(props.match.params.soegeordet).then(response => setSoege(response))
     }, [props.match.params.soegeordet])



    //Her gør vi vores søgeresultat klar til at fremvise på siden
    let soegeliste = <h2>Vent venligst....</h2>
    let antal = "";

    if (soege && soege.length) {

        antal = "Antal match " + soege.length;
        
        soegeliste = soege.map(e => (

            <Card key={e._id} className="col-12 col-lg-4 my-3">
                <Card.Img variant="top" src={"http://localhost:5033/Images/" + e.image} alt="Bageri" />
                    <Card.Body>    
                        <Card.Title>{e.titel}</Card.Title>
                        <Card.Text>
                            {e.teaser.substr(0,50) + "......"}
                        </Card.Text>
                        <button className="btn btn-outline-dark text-muted" ><Link className="text-reset" to={"/produkt/" + e._id}>Læs mere</Link></button>
                </Card.Body>
            </Card>
    ))}

    return (
        <div className="container"> 
                <h1>Søgeresultat</h1>
                {antal}
            <div className="row my-5"> 
                {soegeliste}
            </div> 
        </div> 
    )
}
export default Searchresult