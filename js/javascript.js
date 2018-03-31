  var link = document.querySelector(".button-main-feedback");
  var modal = document.querySelector(".modal-feedback");
  var layer = document.querySelector(".layer");
  var modalClose = document.querySelector(".modal-close");
  var nameInput = modal.querySelector("[name=form-name]");
  var map = document.querySelector(".main-map-adress");
  var mapFill = document.querySelector(".map-hidden");

  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal-open");
    layer.classList.add("modal-open");
    nameInput.focus();
  })

  modalClose.addEventListener("click", function(evt){
    evt.preventDefault();
    modal.classList.remove("modal-open");
    layer.classList.remove("modal-open");
  })
  map.addEventListener("mouseover", function(evt){
    evt.preventDefault();
    map.classList.add("map-active");
  })

  map.addEventListener("mouseout", function(evt){
    evt.preventDefault();
    map.classList.remove("map-active");
  })

  map.addEventListener("mouseover", function(evt){
    evt.preventDefault();
    mapFill.classList.add("map-hidden-active");
  })

  map.addEventListener("mouseout", function(evt){
    evt.preventDefault();
    mapFill.classList.remove("map-hidden-active");
  })
