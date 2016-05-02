$(function() {

  $('#submitButton').click(function(e) {
    e.preventDefault();
    // console.log('hello');
    var inputs = $('#form').serializeArray();
    console.log(inputs);
  });
});
