$(function() {

  $("#display").val("hello world"); // variable here to add input as typed

// next step: get input working
  $("#calc").on("click", ".key", function() {
    event.preventDefault();
    alert("working");
  });


});
