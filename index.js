const funcion = require("./pelis.js"); //Traemos las funciones al index

function parsear(argv) {
  //Funcion para pasar un array con argumentos a un objeto
  const respuesta = []; //Prepara el array vacio para luego darlo como respuesta
  argv.forEach(function (item, ind) {
    //iteramos dentro del array
    if (item.startsWith("--")) {
      const nombreSinGuiones = item.slice(2); //Sacamos los guiones
      respuesta[nombreSinGuiones] = argv[ind + 1]; //colocamos las propiedades
    }
  });
  return respuesta; // retornamos todo lo que hicimos
}

function ejecutarOperacion(filtrador) {
  const mapa = {
    "": funcion.sinParametros,
    sort: funcion.sort,
    search: funcion.search,
    tag: funcion.tag,
  };
  const filtro = filtrador.filtro;
  const ejecutor = mapa[filtro];

  return ejecutor();
}

function main() {
  const soloArgumentos = process.argv.slice(2);
  const argumentoParseado = parsear(soloArgumentos);
  const resultado = ejecutarOperacion(argumentoParseado);
}

main();
