$(function() {
  var reSSN = /^(\d{3}-\d{2}-\d{4})|(\d{3}\d{2}\d{4})$/;
  var reCC = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}(?:2131|1800|35\d{3})\d{11})$/gm;


  $('#submitButton').click(function() {
    var inputs = $('#form').serializeArray();
    var foundMatch = false;
    var empty = false;

    inputs.forEach(function(element) {
      if(element.value === "" || !element.value) {
        $('#' + element.name).css('background-color', 'tomato');
        empty = true;
      }
      var matchSSN = reSSN.exec(element.value);
      var matchCC = reCC.exec(element.value);
      if(matchSSN || matchCC) {
        foundMatch = true;
      }
    });

    if(foundMatch) {
      $('#failureModal').modal('show');
    } else if(empty) {
      $('#emptyFormModal').modal('show');
    } else {
      $('#successModal').modal('show');
    }

  });
});
