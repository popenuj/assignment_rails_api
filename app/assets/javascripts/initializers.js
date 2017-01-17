var SPM = SPM || {}

$(document).ready(function(){
  controller = $("#page-title").data("controller");
  if(controller === "movie"){
    SPM.Movies.controller(SPM.Movies.model, SPM.Movies.view)
  }
})
