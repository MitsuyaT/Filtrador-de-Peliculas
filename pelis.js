const peliculas = require("./pelis.json");

function sinParametros() {
  return peliculas;
}

function sort(sort) {
  switch (sort) {
    case "rating":
      const ratings = peliculas.map((pelicula) => pelicula.rating);
      return ratings.sort((a, b) => b - a);

    case "title":
      const titles = peliculas.map((pelicula) => pelicula.title);
      return titles.sort();

    default:
      console.log("Error");
      break;
  }
}

function search() {
  
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
