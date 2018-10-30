
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

  var $container = $('.isotope-items'),
    $filterLinks = $('.filter-nav li a');

  $container.isotope({
    itemSelector: '.item',
    filter: '.item'
  });
  $filterLinks.click(function(e){
    e.preventDefault();
    var $this = $(this);
    if ( $this.hasClass('selected') ) {
      return;
    }
    $filterLinks.filter('.selected').removeClass('selected');
    $this.addClass('selected');
    selector = $this.data('filter');
    $container.isotope({
      filter: selector
    });
  });

  if($(window).width() < 768) {
    var selected_item = $('.filter-nav .selected .item-cat').text();
    $('.isotope-nav').append('<span>' + selected_item + '</span>');
    $('.isotope-nav').click(function() {
      $('.filter-nav').slideToggle();
      var selected_item = $('.filter-nav .selected .item-cat').text();
      $('.isotope-nav > span').text(selected_item);
    });
  };





















});
