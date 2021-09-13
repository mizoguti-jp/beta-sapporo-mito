var order = 0;
var score = 1;
var trueList = [0,3,4,1,2,5,8,7,6];

$(function() {
  $("#0").click(function() {
    $("#0").css("background-color", "gray");
  });
  $("#1").click(function() {
    $("#1").css("background-color", "gray");
  });
  $("#2").click(function() {
    $("#2").css("background-color", "gray");
  });
  $("#3").click(function() {
    $("#3").css("background-color", "gray");
  });
  $("#4").click(function() {
    $("#4").css("background-color", "gray");
  });
  $("#5").click(function() {
    $("#5").css("background-color", "gray");
  });
  $("#6").click(function() {
    $("#6").css("background-color", "gray");
  });
  $("#7").click(function() {
    $("#7").css("background-color", "gray");
  });
  $("#8").click(function() {
    $("#8").css("background-color", "gray");
  });
});

function game(input){
  if(input == 9){
    if(score == 1){
      alert("OK");
      // ここに正解の時のリンク
    } else{
      alert("NG");
      // ここに失敗の時のリンク
    }
  } else{
    // alert(order);
    // alert(score);
    if(input == trueList[order]){
     score *= 1;
    //  alert(order);
    } else{
     score *= 0;
    //  alert(order);
    }
    order++;
  }
}

function reset(){
  location.reload();
}