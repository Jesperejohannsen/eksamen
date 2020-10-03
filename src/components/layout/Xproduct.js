import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import parse from 'html-react-parser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// KAlder fra vores API fil til backenden
import { hentProduktID } from '../helpers/apikald'

const Xproduct = (props) => {

    const [produktid, setProduktid] = useState()

    useEffect(() => {

      hentProduktID(props.match.params.produktID).then(setProduktid);

    // hentProduktID().then(setKommentar);

     }, [props.match.params.produktID])

    let produktinfo, overskrift, likesinfo  = "Indlæses ....."

    let commenlist
    let ingridiensliste

    if(produktid) {

        overskrift = (
            <div className="col-12 col-lg-9 text-left">
                <h2 style={{textTransform: "uppercase"}}>{produktid.titel}</h2>
                <h4 className="text-secondary">{produktid.kategori.titel} </h4>
            </div>
        )
        produktinfo = (   
            <div>
                <img className="productimg mr-2" src={"http://localhost:5033/Images/" + produktid.image} alt={"Foto fra " + produktid.titel} title={"Foto fra " + produktid.titel}/>
                <p style={{color: "lightgrey"}}className="text-left">{parse(produktid.beskrivelse)}</p>
            </div>
        )
        likesinfo = (
            <div type="button" className="btn btn-outline btn-white">
                <p>LIKE! {produktid.likes} <FontAwesomeIcon style={{color: "red"}} icon="heart" /></p>
            </div>
        )
       
        ingridiensliste = produktid.ingredienser.map(i => (
            <div className="col-12" key={i._id}>
                <div style={{border: "none"}} className="card my-1">
                    <div className="card-body">
                    <div className="card-title"><h5>{i.maengde} {i.enhed_forkortet} {i.ingrediens_titel} </h5></div>
                    </div>
                </div>            
            </div>
    ))
    commenlist = produktid.kommentar.map(k => (
            <div className="col-12 text-left mb-3" key={k._id}>
                <div style={{border: "none"}}className="card">
                     <div className="card-body">
                        <h5>{k.bruger.fornavn} {k.bruger.efternavn}</h5>
                         <p>{k.oprettet}</p>
                        <p>{k.kommentaren}</p>
                    </div>
                </div>
            </div>
     ))}

    return (
        <div>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-9">
                        {overskrift}
                    </div>
                    <div className="col-3">{likesinfo} </div>
                </div>
                <div className="row">
                    <div className="col-lg-9 col-12">
                        {produktinfo}
                    </div>
                    <div className="col-12 col-lg-3">
                        {ingridiensliste}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-5">
                        <h3 style={{fontSize: "1rem"}}>kommentar</h3>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Fortæl os hvad du synes..."
                            aria-label="Fortæl os hvad du synes..."
                            aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                            <Button style={{background: "lightblue", color: "#567289"}}variant="outline-secondary">Indsæt</Button>
                            </InputGroup.Append>
                        </InputGroup>                    
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-5">
                        {commenlist}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Xproduct