
jQuery(document).ready(function($) {

  $('.btn-nav').click(function(e){
    e.preventDefault();
    $('.standard-section').removeClass('show');
    var section = $($(this).attr('href'));
    $('body').addClass('showing-section');
    $(section).addClass('show');
  });
  $('.home').click(function(e){
    e.preventDefault();
    $('.standard-section').removeClass('show');
    $('body').removeClass('showing-section');
  });






  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })























});
