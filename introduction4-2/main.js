
//法人と個人の選択
function formSwitch(){
  let select = document.getElementsByName('select');
  if(select[0].checked){
    $('.solo').addClass('appear');
    $('.corp').removeClass('appear');
  }else if (select[1].checked){
    $('.corp').addClass('appear');
    $('.solo').removeClass('appear');
  }
}

document.addEventListener('load',formSwitch());

//入力欄のエラー表示



//「電話番号を入力してください」の吹き出し表示
function errorTip(){
  $('.error-tip').addClass("action");
}

function errorRemove(){
  $('.error-tip').removeClass('action');
};

document.addEventListener('mouseover', errorTip());
document.addEventListener('mouseleave',errorRemove());
