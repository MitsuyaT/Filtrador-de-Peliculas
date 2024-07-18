const peliculas = require("./pelis.json");

function sinParametros() {}

function sort(pelis) {
    const titles = pelis.map(pelicula => pelicula.title);
    const ratings = pelis.map(pelicula => pelicula.rating);

    function sortRatings(ratingArray) {
        return ratingArray.sort((a, b) => b - a);
    }
    function sortTitles(titleArray) {
        return titleArray.sort();
    }
    return {
        sortedTitles: sortTitles(titles),
        sortedRatings: sortRatings(ratings)
    };
}
sort(peliculas);

function search() {}

function tag() {}
