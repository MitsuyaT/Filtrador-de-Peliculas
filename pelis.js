const peliculas = require("./pelis.json");

function sinParametros() {
  return peliculas;
}

function sort() {}

function search() {}

function tag(buscaTag) {
  return peliculas.filter((pelicula) => pelicula.tags.includes(buscaTag));
}

module.exports = {
  sinParametros,
  sort,
  search,
  tag,
};
