// $( function() {
//     $( "#datepicker" ).datepicker();
//   } );

$(document).ready(function() {
  $("form#ourform").submit(function(event) {
    event.preventDefault();
  var userName1 = $("#userName").val();
  var userDescription1 = $("#userDescription").val();
  var userDate1 = $("#userDate").val();
  var userStartTime1 = $("#userStartTime").val();
  var userEndTime1 = $("#userEndTime").val();

  $("#ourform").addClass("hidden");

  var message = "Thank you, " + userName1 + ". Your appointment for " + userDescription1 + " on " + userDate1 + " from " + userStartTime1 + " until " + userEndTime1 + " is submitted." ;
  $("#output").text(message);

  });
});
