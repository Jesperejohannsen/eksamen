import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

// Henter vores produkter fra vores API via vores apikald fil
import { alleProdukter, hentAlleKategori } from '../helpers/apikald'


const Produkter = () => {

    //STATE
    const [kategori, setKategori] = useState();
    const [AllehentProdukter, setAlleHentProdukter] = useState();
    const [valgtkategori, setValgtkategori] = useState("5f63b9f9702cca37f87ce06f");

    //useEffect. Vi henter produkterne
    useEffect(() => {

        hentAlleKategori().then(setKategori)

        alleProdukter().then(setAlleHentProdukter)

    }, [])


    //Her henter vi kategorierne som  så indlæses på siden
    let kategoriliste = <option>Indlæser produkter. Vent venligst.</option>

    if (kategori && kategori.length) {
        kategoriliste = kategori.map(r => (

            <div className="col-12" key={r._id}>
                <div style={{border: "none"}}className="card my-1">
                    <div className="card-body">
                        <button onClick={e => setValgtkategori(e.target.value)} className="my-2 btn col-12" key={r._id} value={r._id}>{r.titel}</button>
                    </div>
                </div>
            </div>
        ))
    }
    // produkt indlæses på siden--------------------------------------
    // Når component loader og der endnu ikke er produkt i produkt-state skriver den nedenstående besked
    let alleproduktliste = <h2>Loading af produkter ....</h2>
   
    if (AllehentProdukter && AllehentProdukter.length) {

        alleproduktliste = AllehentProdukter.filter(e => {

            return e.kategori._id === valgtkategori
        })
            .map(e => (

                <Card style={{border: "none"}} key={e._id} className="col-12 col-md-4 col-lg-4 my-3">
                    <Card.Img variant="top" src={"http://localhost:5033/Images/" + e.image} alt="bageri" />
                    <Card.Body>
                        <Card.Title>{e.titel}</Card.Title>
                        <Card.Text>
                            {e.teaser.substr(0, 100) + "......"}
                        </Card.Text>
                        <button className="btn btn-outline-dark text-muted" ><Link className="text-reset" to={"/produkt/" + e._id}>SE MERE</Link></button>
                    </Card.Body>
                </Card>
            ))
    }
    return (
        <div className="container">
            <h2 className="logo my-5">Vores elskede bagværk</h2>
            <p style={{fontSize: "1rem", color: "lightgrey"}}  className="my-5">Der er mange tilgængelige udgaver af Lorem ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
            <div className="row">
                <div className="col-12 col-lg-3">
                    {kategoriliste}
                </div>
                <div className="col-12 col-lg-9">
                    <div className="row">
                        {alleproduktliste}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Produkter