const peliculas = require("./pelis.json");

function sinParametros() {
  return peliculas;
}

function sort(sort) {
  switch (sort) {
    case "rating":
      return peliculas.map((pelicula) => ({ title: pelicula.title, rating: pelicula.rating }))
      .sort((a, b) => b.rating - a.rating);

    case "title":
      return peliculas.map((pelicula) => pelicula.title).sort();
    
      default:
      console.log("Error");
      break;
  }
}

function search(buscador) {
  return peliculas.filter((pelicula) => pelicula.title.includes(buscador.toLowerCase()));
}

function tag(buscaTag) {
  return peliculas.filter((pelicula) => pelicula.tags.includes(buscaTag.toLowerCase()));
}

module.exports = {
  sinParametros,
  sort,
  search,
  tag,
};
