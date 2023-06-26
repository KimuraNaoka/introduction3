$(function(){
  $('.login').on('click',function(){
      $('.modal, .overlay').addClass('active');
      return false;
  });

  $('.close-m, .overlay').on('click',function(){
    $('.modal, .overlay').removeClass('active');
  });
});