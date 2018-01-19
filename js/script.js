$(document).ready(function () {

  $('.button').click(function() { 
    if ($('#img').attr('src') == "img/on.jpg"){
      $('#img').attr('src', "img/off.jpg");
    } else {
      $('#img').attr('src', "img/on.jpg");
    }
  }); // end click

  $('#timer-btn').click(function(){
    var timeLeft = $('#text').val();
    if (timeLeft == "") {
      alert("請填入數字");
      return;
    } else if (isNaN(timeLeft)) {
      alert("請填入數字");
      return;
    }
    timeLeft = parseInt(timeLeft);
    $('#text').val('');
    $('body button').prop('disabled', true);

    $('#img').attr('src', "img/on.jpg");
    $('.timer').html(timeLeft);

    var interval = setInterval(countDownTimer, 1000);

    function countDownTimer() {
      timeLeft -= 1;
      if (timeLeft <= 0) {
        $('#img').attr('src', 'img/off.jpg');
        clearInterval(interval);
        $('body button').prop('disabled', false);
      }

      $('.timer').html(timeLeft); 
    }
  }); // end click
})