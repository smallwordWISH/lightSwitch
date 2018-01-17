$(document).ready(function () {

  var state = true;

  $('.button').click(function() { 
    state = !state;
    imageSrc = state ? "img/on.jpg" : "img/off.jpg ";
    $('#img').attr('src', imageSrc);
  });

  var timeLeft = 5;
  var interval = setInterval(countDownTimer, 1000);

  function countDownTimer() {
    timeLeft -= 1;

    if (timeLeft <= 0) {
      $('#img').attr('src', 'img/off.jpg');
      clearInterval(interval);
      state = !state;
    }

    $('.timer').html(timeLeft);
  }

})