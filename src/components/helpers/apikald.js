import axios from 'axios';

// BASE url
const api = {
    baseUrl: 'http://localhost:5033/'
}

//----------- Seneste nyt ------------
export const hentAntalProdukter = async () => {

    let response = await axios.get(api.baseUrl + "nyheder/antal/3") // http://localhost:5033/nyheder/antal/2
    return response.data;

}
//----------- Hent produkter ------------
export const hentProdukter = async () => {

    let response = await axios.get(api.baseUrl + "produkter/antal/8") // http://localhost:5033/produkter/antal/9
    return response.data;

}
//----------------Søgning------------------------
export const soegProdukt = async (soegord) => {

    let response = await axios.get(api.baseUrl + "produkter/soeg/" + soegord) // http://localhost:5033/produkter/soeg/
    return response.data;

}

//----------------Nyhedsmail------------------------
export const tilmeldNyheder = async (email) => {

    let formdata = new FormData(email)

    let response = await axios.post(api.baseUrl + "nyhedsbrevtilmelding/", formdata) // http://localhost:5033/nyhedsbrevtilmelding/ 
    .then(response => { return response.data})
    .catch(error => { return "error"})

    return response.data;

}

//----------------Hent Kategori------------------------
export const hentAlleKategori = async () => {

    let response = await axios.get(api.baseUrl + "kategorier") // http://localhost:5033/kategorier
    return response.data;

}

// ----------------- Hent alle produkter------------------
//GET alle produkter
export const alleProdukter = async () => {

    let response = await axios.get(api.baseUrl + "produkter") // http://localhost:5033/produkter
    return response.data;

}

// ----------------- Hent produkter via id------------------
//GET hent event ud fra id
export const hentProduktID = async (id) => {

    let response = await axios.get(api.baseUrl + "produkter/" + id) // http://localhost:5033/produkter/
    return response.data;
}

//----------------Kontakt------------------------
//Post kontakt
export const sendKontaktbesked = async (besked) => {

    let formdata = new FormData(besked);

    let response = await axios.post(api.baseUrl + "kontakt", formdata) // http://localhost:5033/kontakt/
    .then(response => { return response.data})
    .catch(error => { return "error"})

    return response;

}
// ----------------- Likes ------------------
//GET hent event ud fra id
export const tilfojlike = async (id) => {

    let response = await axios.patch(api.baseUrl + "produkter/likes" + id) // http://localhost:5033/produkter/likes
    return response.data;
}