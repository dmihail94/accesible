//Hide aria label
$('.aria').css('display', 'none');

//When the input targeted is focused it shows the aria label from that input
$('input').focus(function() {
  $(this).prev('.aria').show('slow');
});

//When the input targeted is not focused it hide the aria label from that input
$('input').blur(function() {
  $(this).prev('.aria').hide('slow');
});
