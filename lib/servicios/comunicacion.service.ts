import { urlServer } from "../constantes/constantes";
import axios from "axios";
import {PeticionHttp} from "../interfaces/PeticionHttp";
export class ComunicacionService{

    constructor(){}

    ejecutarPeticionHttp(peticion: PeticionHttp){
        switch (peticion.tipo) {
            case 'GET': {
                return this.ejecutarPeticionGet(peticion.path,);
            }case 'POST': {
                return this.ejecutarPeticionPost(peticion.path, peticion.data);
            }
        }
    }
    private ejecutarPeticionGet(path: string){
        const url = `${urlServer}${path}`;
        return axios.get(url).then((result) => {
            return result.data
        }
        ).catch(
            error => {return error}
        );
    }
    private ejecutarPeticionPost(path: string, data: any){
        const url = `${urlServer}${path}`;
        return axios.post(url, data).then((result) => {
                return result.data
            }
        ).catch(
            error => {return error}
        );
    }

    login(offline: boolean, usuario: string, password: string){
        if(offline){
            return {
                codigo: 0,
                data:{
                    nombre: 'Lionel Andres Messi',
                    email: 'lionelmessi@gmail.com',
                    celular: '0998877665',
                }
            };
        }else{
            return {
                codigo: 0,
                data:{
                    nombre: 'Lionel Andres Messi',
                    email: usuario,
                    celular: '0998877665',
                }
            };
        }
    }

    registrarUsuario(offline: boolean){
        if(offline){
            return {
                codigo: 0,
                data:{
                    nombre: 'Lionel Andres Messi',
                    email: 'lionelmessi@gmail.com',
                    celular: '0998877665',
                    identificacion: '12331322112',
                    tipoIdentificacion:'cedula'
                }
            };
        }
    }

    verificarOtp(offline: boolean) {
        if(offline){
            return {
                codigo: 0,
                data:{
                    valido: true,
                }
            };
        }
    }

    depositarCheque(offline: boolean){
        if(offline){
            return {
                codigo: 0,
                data:{
                    valido: true,
                }
            };
        }
    }

    consultaCheques(offline: boolean){
        if(offline){
            return {
                codigo: 0,
                data:{
                    valido: true,
                }
            };
        }
    }

    actualizarDatosUsuario(offline: boolean){
        if(offline){
            return {
                codigo: 0,
                data:{
                    valido: true,
                }
            };
        }
    }

}
