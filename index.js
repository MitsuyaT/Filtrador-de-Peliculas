const funcion = require("./pelis.js"); //Traemos las funciones al index

function parsear(argv) {
  //Funcion para pasar un array con argumentos a un objeto
  const respuesta = []; //Prepara el array vacio para luego darlo como respuesta
  argv.forEach(function (item, ind) {
    //iteramos dentro del array
    if (item.startsWith("--")) {
      const nombreSinGuiones = item.slice(2); //Sacamos los guiones
      const parametrosMinusculos = nombreSinGuiones.toLowerCase()
      respuesta[parametrosMinusculos] = argv[ind + 1]; //colocamos las propiedades
    }
  });
  return respuesta; // retornamos todo lo que hicimos
}

function ejecutarOperacion(filtrador) {
  const mapa = {
    nada: funcion.sinParametros,
    sort: funcion.sort,
    search: funcion.search,
    tag: funcion.tag,
  };
  const filtro = filtrador.filtro.toLowerCase();
  const ejecutor = mapa[filtro];

  //Este switch es para saber si la funcion que determina el filtro necesita pasar parametros.
  switch (filtro) {
    case "nada":
      return ejecutor();
    case "sort":
      return ejecutor(filtrador.sort);
    case "search":
      return ejecutor(filtrador.search);
    case "tag":
      return ejecutor(filtrador.tag);
    default:
      throw new Error(`Operación '${filtro}' no reconocida.`);
  }
}

function main() {
  const soloArgumentos = process.argv.slice(2);
  const argumentoParseado = parsear(soloArgumentos);
  const resultado = ejecutarOperacion(argumentoParseado);
  console.table(resultado);
}

main();
