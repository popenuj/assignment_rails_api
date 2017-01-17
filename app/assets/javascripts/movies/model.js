SPM = SPM || {}
SPM.Movies = SPM.Movies || {}

SPM.Movies.model = (function($){
  var movies = [];
  var currentIndex = 0;
  var endOfInput = false;

  var getMovies = function getMovies(){
    if (!endOfInput) {
      endOfInput = true;
      return $.ajax({
        url: "/movies.json?start_id=" + currentIndex,
        dataType: "json",
        success: incrementIndex
      })
    }
  }

  var createNewMovie = function createNewMovie(data) {
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

  var incrementIndex = function incrementIndex(response) {
    if (response.movies.length === 15) {
      currentIndex += 15;
      endOfInput = false;
    } else {
      endOfInput = true;
    }
  }

  var notAtEndOfInput = function() {
    return !endOfInput;
  }

  return {
    movies: getMovies,
    newMovie: createNewMovie,
    stillMore: notAtEndOfInput
  }
})($)
