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
    nada: funcion.sinParametros,
    sort: funcion.sort,
    search: funcion.search,
    tag: funcion.tag,
  };
  const filtro = filtrador.filtro;
  const ejecutor = mapa[filtro];

  //Este bloque de codigo revisa que filtro tiene para invocar la funcion correspondiente, en caso que necesite un parametro este se lo pasa.
  if (typeof ejecutor === "function") {
    if (filtrador.filtro === "nada") {
      return ejecutor();
    }
    if (filtrador.filtro === "sort") {
      return ejecutor(filtrador.sort);
    }
    if (filtrador.filtro === "search") {
      return ejecutor(filtrador.search);
    }
    if (filtrador.filtro === "tag") {
      return ejecutor(filtrador.tag);
    }
  } else {
    throw new Error(`Operación '${filtro}' no reconocida.`); //Si no hay funcion valida tira error
  }
}

function main() {
  const soloArgumentos = process.argv.slice(2);
  const argumentoParseado = parsear(soloArgumentos);
  const resultado = ejecutarOperacion(argumentoParseado);
  console.table(resultado);
}

main();
