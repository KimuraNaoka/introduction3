$(function(){
  $('#js-open').on('click',function(){
      $('#js-modal, #js-overlay').fadeIn();
      return false;
  });

  $('#js-close').on('click',function(){
    $('#js-modal, #js-overlay').fadeOut();
    return false;
  });
});