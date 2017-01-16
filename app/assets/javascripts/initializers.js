var SPM = SPM || {}

$(document).on("page:change", function(){
  controller = $("#page-title").data("controller");
  if(controller === "movie"){
    SPM.Movies.init()
  }
})
$(document).ready(function(){
  controller = $("#page-title").data("controller");
  if(controller === "movie"){
    SPM.Movies.controller(SPM.Movies.model, SPM.Movies.view)
  }
})
