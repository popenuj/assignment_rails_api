SPM = SPM || {}
SPM.Movies = SPM.Movies || {}

SPM.Movies.controller = (function(){
  var model, view
  var init = function init(m, v){
    model = m;
    view = v;
    view.init({
      newMovie: newMovie,
      scroll: scroll
    });
    scroll();
  }

  var newMovie = function newMovie(data){
    model.createMovie(data).done(function(resp){
      view.insert(resp.title, resp.release_date)
      view.clear();
    })
  }

  var scroll = function scroll() {
    if (model.stillMore()) {
      model.movies().done(function(resp){
        view.populate(resp.movies)
      })
    }
  }

  return init;
})()
