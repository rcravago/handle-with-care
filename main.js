$( document ).ready(function() {
  $('#code-video').mouseover(function(){
    $(this).get(0).play();
  }).mouseout(function(){
    $(this).get(0).pause();
  })
});
