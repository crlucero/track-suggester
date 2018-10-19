$(document).ready(function() {
  $(".formOne").submit(function(event) {
  event.preventDefault();

  var operator1 = parseInt($("input:radio[name=question1]:checked").val());
  var operator2 = parseInt($("input:radio[name=question2]:checked").val());
  var operator3 = parseInt($("input:radio[name=question3]:checked").val());
  var operator4 = parseInt($("input:radio[name=question4]:checked").val());
  var operator5 = parseInt($("input:radio[name=question5]:checked").val());

  var sum = (operator1 + operator2 + operator3 + operator4 + operator5);

  if (sum <=4) {
    $(".c").show();
    $(".css").hide();
    $(".java").hide();
  }

  else if (sum <=7 && sum >=5) {
    $(".c").hide();
    $(".css").show();
    $(".java").hide();
  }

  else if (sum >=8) {
    $(".c").hide();
    $(".css").hide();
    $(".java").show();
  }


});
$("button").click(function(){
        $("li").click();
    });

});
