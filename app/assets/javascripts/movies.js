SPM = SPM || {}

SPM.Movies = (function($){
  var movies = [],
      $table,
      $movieForm;
  var getMovies = function getMovies(){
    $.ajax({
      url: "/movies.json",
      dataType: "json"
    })
     .done(function(resp){
       movies = resp.movies
    }).then(function(){
      populateTable()
    })
  }

  var createNewMovie = function createNewMovie(e) {
    e.preventDefault();
    var data = $(e.target).serialize()
    $.ajax({
      url: "/movies.json",
      method: "POST",
      data: data,
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      },
      dataType: "json",
    }).done(function(resp){
      insertIntoTable(resp.title, resp.release_date)
    })
  }

  var newMovieListener = function newMovieListener() {
    $movieForm.on('submit', createNewMovie)
  }

  var insertIntoTable = function(title, relDate){
    var $tr = $("<tr>"),
        $title = $("<td>"),
        $relDate = $("<td>");
    $title.text(title);
    $relDate.text(relDate)
    $tr.append($title);
    $tr.append($relDate)
    $table.children("tbody").append($tr)
  }

  var populateTable = function populateTable() {
    for(i = 0; i < movies.length; i++){
      insertIntoTable(movies[i].title, movies[i].release_date)
    }
  }

  var init = function init() {
    $table = $('#movie-table');
    $movieForm = $('#new_movie')
    getMovies();
    newMovieListener();
  }

  return init;
})($)
