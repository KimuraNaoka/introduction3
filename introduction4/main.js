$(function(){
  $('.login').on('click',function(){
      $('.modal, .overla').addClass('active');
      return false;
  });

  $('.close-m, .overlay').on('click',function(){
    $('.modal, .overlay').removeClass('active');
  });
});