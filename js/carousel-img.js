/* Loop through all of the images in the directory and load them dynamically
to the HTML file */
for (var i = 1; i <= 179; i++){ // 179 is the number of images in the past-events directory
  var carouselDiv = document.createElement("div");
  carouselDiv.className = "carousel-item";

  if (i == 1) {
    carouselDiv.className += " active";
  }

  var img = document.createElement("img");
  var srcString = "img/past-events/img_(" + i + ").jpg"
  img.src = srcString;
  img.className = "d-block img-fluid";

  carouselDiv.appendChild(img);
  //document.getElementById("carouselWrapper").appendChild(carouselDiv);
  $('#carouselWrapper').append(carouselDiv);
}

// var carouselDiv = document.createElement("div");
// carouselDiv.className = "carousel-item active";
//
// var img = document.createElement("img");
// var srcString = "img/past-events/img_(1).jpg"
// img.src = srcString;
// img.className = "d-block img-fluid";
//
// carouselDiv.appendChild(img);
// //document.getElementById("carouselWrapper").appendChild(carouselDiv);
// $('#carouselWrapper').append(carouselDiv);
// console.log("In the for loop " + 1 + "th iteration with src " + img.src);
