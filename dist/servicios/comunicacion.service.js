"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComunicacionService = void 0;
const constantes_1 = require("../constantes/constantes");
const axios_1 = __importDefault(require("axios"));
class ComunicacionService {
    constructor() {
    }
    //Ejecutar petición http
    ejecutarpetición() {
        const url = constantes_1.urlServer;
        axios_1.default.get(url).then(e => console.log(e.data)).catch(error => console.log(error));
    }
}
exports.ComunicacionService = ComunicacionService;
