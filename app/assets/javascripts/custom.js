/* Your JS codes here */
$(document).ready(function() {

  $("#mosaic").nested({
      selector: '.box',
      gutter: 6,
      animate: false

  });
  
  //   var wall = new freewall("#mosaic");
  //   wall.reset({
  //  selector: '.item',
  //  animate: true,
  //  cellW: 150,
  //  cellH: 'auto',
  //  onResize: function() {
  //    wall.fitWidth();
  //  }
  // });
  // 
  // ab = function(){
  //   var boxes = makeBoxes();
  //   $("#mosaic").prepend(boxes).nested('prepend', boxes);
  // }
  // 
  // 
  // setInterval(ab, 5000);
  

  
});