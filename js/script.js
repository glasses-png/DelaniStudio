$(document).ready(function() {
  $(".icon1").click(function() {
    $("#design1").toggle();
    $(".icon1").toggle();
  });
});
$(document).ready(function() {
  $(".design").click(function() {
    $(".icon1").show();
    $("#design1").hide();
  });
});

$(document).ready(function() {
  $(".icon2").click(function() {
    $("#design2").toggle();
    $(".icon2").toggle();
  });
});
$(document).ready(function() {
  $(".development").click(function() {
    $(".icon2").show();
    $("#design2").hide();
  });
});

$(document).ready(function() {
  $(".icon3").click(function() {
    $("#design3").toggle();
    $(".icon3").toggle();
  });
});

$(document).ready(function() {
  $(".product").click(function() {
    $(".icon3").show();
    $("#design3").hide();
  });
});
// $(document).ready(function() {
//   $("form").submit(function(event) {
//     var name = $("input#name").val();
//     alert("Hello " + name + " Thank you for reaching out to us");

//     event.preventDefault();
//   });
// });
