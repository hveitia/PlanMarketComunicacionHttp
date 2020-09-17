"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComunicacionService = void 0;
const constantes_1 = require("../constantes/constantes");
const axios_1 = __importDefault(require("axios"));
class ComunicacionService {
    constructor() { }
    ejecutarPeticionHttp(peticion) {
        switch (peticion.tipo) {
            case 'GET': {
                return this.ejecutarPeticionGet(peticion.path);
            }
            case 'POST': {
                return this.ejecutarPeticionPost(peticion.path, peticion.data);
            }
        }
    }
    ejecutarPeticionGet(path) {
        const url = `${constantes_1.urlServer}${path}`;
        return axios_1.default.get(url).then((result) => {
            return result.data;
        }).catch(error => { return error; });
    }
    ejecutarPeticionPost(path, data) {
        const url = `${constantes_1.urlServer}${path}`;
        return axios_1.default.post(url, data).then((result) => {
            return result.data;
        }).catch(error => { return error; });
    }
    login(offline, usuario, password) {
        if (offline) {
            return {
                codigo: 0,
                data: {
                    nombre: 'Lionel Andres Messi',
                    email: 'lionelmessi@gmail.com',
                    celular: '0998877665',
                }
            };
        }
        else {
            return {
                codigo: 0,
                data: {
                    nombre: 'Lionel Andres Messi',
                    email: usuario,
                    celular: '0998877665',
                }
            };
        }
    }
    registrarUsuario(offline) {
        if (offline) {
            return {
                codigo: 0,
                data: {
                    nombre: 'Lionel Andres Messi',
                    email: 'lionelmessi@gmail.com',
                    celular: '0998877665',
                    identificacion: '12331322112',
                    tipoIdentificacion: 'cedula'
                }
            };
        }
    }
    verificarOtp(offline) {
        if (offline) {
            return {
                codigo: 0,
                data: {
                    valido: true,
                }
            };
        }
    }
    depositarCheque(offline) {
        if (offline) {
            return {
                codigo: 0,
                data: {
                    valido: true,
                }
            };
        }
    }
    consultaCheques(offline) {
        if (offline) {
            return {
                codigo: 0,
                data: {
                    valido: true,
                }
            };
        }
    }
    actualizarDatosUsuario(offline) {
        if (offline) {
            return {
                codigo: 0,
                data: {
                    valido: true,
                }
            };
        }
    }
}
exports.ComunicacionService = ComunicacionService;
