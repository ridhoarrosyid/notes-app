const Hapi = require('@hapi/hapi');
const routes = require('./routes.js');

const init = async ()=>{
  const server = Hapi.server({
    port:5000,
    host:'localhost',
    routes:{
      cors:{
        origin:['http://localhost:8080']
      }
    }
  });

  server.route(routes);

  await server.start();
  console.log(`server berjalan pada ${server.info.uri}`);
};

init();