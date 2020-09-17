const service = require('./dist').ComunicacionService;
const api = new service();

 const obj = {
  tipo: 'GET',
  path: '/media',
  token: '',
  data: {}
 };

 api.ejecutarPeticionHttp(obj).then(
     data => console.log(data)
 );




 

