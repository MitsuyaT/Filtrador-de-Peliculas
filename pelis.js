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
  return peliculas.filter((pelicula) => pelicula.title.includes(buscador));
}

function tag(buscaTag) {
  return peliculas.filter((pelicula) => pelicula.tags.includes(buscaTag));
}

module.exports = {
  sinParametros,
  sort,
  search,
  tag,
};
