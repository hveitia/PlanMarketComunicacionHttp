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
}
exports.ComunicacionService = ComunicacionService;
