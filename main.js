$(document).ready(function() { 

$('.maintext').show(2000);

var $input = $('.forminfo');
var $errorBox = $('.errorBox')

$('.form').on('submit', function(event) {
    event.preventDefault();
    var submitVal = $input.val(); 

    if ($submitVal === '') return $errorBox.text('Please complete all fields!');

    if ($errorBox.text() !== '') $errorBox.text('');
  });
});

