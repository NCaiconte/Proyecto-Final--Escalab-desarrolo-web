const $player = $("#player");

$(".play").on("click", function(){
  $player.play();
});

$(".pause").on("click", function(){
  $player.pause();
});