import { urlServer } from "../constantes/constantes";
import axios from "axios";
export class ComunicacionService{

    constructor(){

    }

    //Ejecutar petición http
    ejecutarpetición(){
        const url = urlServer;
        axios.get(url).then(
            e=>console.log(e.data)
        ).catch(
            error => console.log(error)
        );
    }
}
