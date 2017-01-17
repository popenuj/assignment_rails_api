SPM = SPM || {}
SPM.Movies = SPM.Movies || {}

SPM.Movies.view = (function($){
  var $table,
      $movieForm;

  var clearInput = function clearInput(){
    $movieForm.children("input[type=text]").val(null)
    setTimeout(function(){
      $movieForm.children("input[type=submit]").attr("disabled",null)
    },100)
  }

  var newMovieListener = function newMovieListener(callback) {
    $movieForm.on('submit', function(e){
      e.preventDefault();
      var data = $(e.target).serialize()
      callback(data);
    })
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

  var populateTable = function populateTable(movies) {
    for(i = 0; i < movies.length; i++){
      insertIntoTable(movies[i].title, movies[i].release_date)
    }
  }

  var scrollListener = function scrollListener(callback) {
    $(window).scroll(function(){
      checkScrollHeight(callback);
    });
  }

  var checkScrollHeight = function checkScrollHeight(callback) {
    if ($(window).scrollTop() >= $(document).height() - $(window).height() - 200){
      callback();
    }
  }

  var init = function init(callback) {
    $table = $('#movie-table');
    $movieForm = $('#new_movie')
    newMovieListener(callback.newMovie);
    scrollListener(callback.scroll);
    checkScrollHeight(callback.scroll);
  }

  return {
    init: init,
    populate: populateTable,
    insert: insertIntoTable,
    clear: clearInput
  }
})($)
