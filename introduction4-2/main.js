console.log('test');

function formSwitch(){
  console.log('test2');
  let select = document.getElementsByName('select');
  if(select[0].checked){
    console.log('test3');
    $('.solo').addClass('appear');
    $('.corp').removeClass('appear');
  }else if (select[1].checked){
    console.log('test4');
    $('.corp').addClass('appear');
    $('.solo').removeClass('appear');
  }
}

window.addEventListener('load',formSwitch());
