import { PeticionHttp } from "../interfaces/PeticionHttp";
export declare class ComunicacionService {
    constructor();
    ejecutarPeticionHttp(peticion: PeticionHttp): Promise<any> | undefined;
    ejecutarPeticionGet(path: string): Promise<any>;
    ejecutarPeticionPost(path: string, data: any): Promise<any>;
}
