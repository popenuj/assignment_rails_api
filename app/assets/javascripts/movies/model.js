SPM = SPM || {}
SPM.Movies = SPM.Movies || {}

SPM.Movies.model = (function($){
  var movies = [];

  var getMovies = function getMovies(){
    return $.ajax({
      url: "/movies.json",
      dataType: "json"
    })
  }

  var createNewMovie = function createNewMovie(e) {
    return $.ajax({
      url: "/movies.json",
      method: "POST",
      data: data,
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      },
      dataType: "json",
    })
  }


  return {
    movies: getMovies,
    newMovie: createNewMovie
  }
})($)
