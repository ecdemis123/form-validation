$(function() {
var reSSN = /^(\d{3}-\d{2}-\d{4})|(\d{3}\d{2}\d{4})$/;
var reCC = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}(?:2131|1800|35\d{3})\d{11})$/gm;


  $('#submitButton').click(function(e) {
    e.preventDefault();
    var inputs = $('#form').serializeArray();

    var foundMatch = false;
    var empty = false;

    inputs.forEach(function(element) {
      if(element.value === "") {
        $('#emptyFormModal').modal('show');
        empty = true;
      }
      var matchSSN = reSSN.exec(element.value);
      var matchCC = reCC.exec(element.value);
      if(matchSSN || matchCC) {
        foundMatch = true;
      }
    });

    if(!foundMatch && !empty) {
      $('#successModal').modal('show');
    } else if(foundMatch && !empty) {
      $('#failureModal').modal('show');
    }

  });
});
