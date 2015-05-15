/* Your JS codes here */
$(document).ready(function() {

  $("#mosaic").nested({
      selector: '.box',
      gutter: 6,
      animate: false

  });
  
  $(".hgx").hover(
    function(){
      
      var currElementTop    = $(this).position().top;
      var currScrollTop     = $(document).scrollTop();
      
      var offset = 30;
      var size = (currScrollTop > currElementTop ) ? (currScrollTop - currElementTop + offset) : 0
      
      $(this).css({'top': size})
      
    }, function(){
      
      console.log("normal coordinate!!");
      $(this).css({'top': 0})
    }
  );
  
  $(".hg").mosaic({
    animation : 'slide'
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