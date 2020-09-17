import { PeticionHttp } from "../interfaces/PeticionHttp";
export declare class ComunicacionService {
    constructor();
    ejecutarPeticionHttp(peticion: PeticionHttp): Promise<any> | undefined;
    private ejecutarPeticionGet;
    private ejecutarPeticionPost;
    login(offline: boolean, usuario: string, password: string): {
        codigo: number;
        data: {
            nombre: string;
            email: string;
            celular: string;
        };
    };
    registrarUsuario(offline: boolean): {
        codigo: number;
        data: {
            nombre: string;
            email: string;
            celular: string;
            identificacion: string;
            tipoIdentificacion: string;
        };
    } | undefined;
    verificarOtp(offline: boolean): {
        codigo: number;
        data: {
            valido: boolean;
        };
    } | undefined;
    depositarCheque(offline: boolean): {
        codigo: number;
        data: {
            valido: boolean;
        };
    } | undefined;
    consultaCheques(offline: boolean): {
        codigo: number;
        data: {
            valido: boolean;
        };
    } | undefined;
    actualizarDatosUsuario(offline: boolean): {
        codigo: number;
        data: {
            valido: boolean;
        };
    } | undefined;
}
