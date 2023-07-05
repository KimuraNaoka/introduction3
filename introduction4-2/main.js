
/*-----------------------------
        法人か個人事業主
------------------------------*/
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

/*-----------------------------
        電話番号エラー表示
------------------------------*/
$('#tel1').on('focus change',()=>{
    if($('#tel1').val() == ""){
      $('#error1').addClass('appear');
      $('#tel1').addClass('action');
  }else{
      $('#error1').removeClass('appear');
      $('#tel1').removeClass('action');
  }
});
$('#tel1').on('blur',()=>{
    $('#error1').removeClass('appear');
});

$('#tel2').on('focus change',()=>{
    if($('#tel2').val() == ""){
      $('#error2').addClass('appear');
      $('#tel2').addClass('action');
  }else{
      $('#error2').removeClass('appear');
      $('#tel2').removeClass('action');
  }
});
$('#tel2').on('blur',()=>{
    $('#error2').removeClass('appear');
});


$('#tel3').on('focus change',()=>{
    if($('#tel3').val() == ""){
      $('#error3').addClass('appear');
      $('#tel3').addClass('action');
  }else{
      $('#error3').removeClass('appear');
      $('#tel3').removeClass('action');
  }
});
$('#tel3').on('blur',()=>{
    $('#error3').removeClass('appear');
});




/*-----------------------------
        送信ボタン制御

           $('form input:required').change(function () {

        let flag = true;

        $('form input:required').each(function(e) {
            //もし必須項目が空なら
            if ($('form input:required').eq(e).val() === "") {
                flag = false;
            }
        });
        //全て埋まっていたら
        if (flag) {
          document.getElementById('button').style.disabled = false;
          document.getElementById('button').style.opacity = 1;
          document.getElementById('button').style.cursor= 'pointer';
        }else {
          document.getElementById('button').style.disabled = true;
          document.getElementById('button').style.opacity = 0.2;
          document.getElementById('button').style.cursor= 'none';
        }
      }
------------------------------*/

  let select = document.getElementsByName('select');
  if(select[0].checked){
      document.getElementById('name').required = false;
      document.getElementById('count').required = false;
      document.getElementById('year').required = false;
      document.getElementById('tel1').required = false;
      document.getElementById('tel2').required = false;
      document.getElementById('tel3').required = false;


      $('form input:required').change(function () {

        let flag = true;

        $('form input:required').each(function(e) {

            if ($('form input:required').eq(e).val() === "") {
                flag = false;
            }
        });

        if (flag) {
          document.getElementById('button').style.disabled = false;
          document.getElementById('button').style.opacity = 1;
          document.getElementById('button').style.cursor= 'pointer';
        }else {
          document.getElementById('button').style.disabled = true;
          document.getElementById('button').style.opacity = 0.2;
        }
    });
  }else if(select[1].checked){
      $('form input:required').change(function () {

        let flag = true;

        $('form input:required').each(function(e) {

            if ($('form input:required').eq(e).val() === "") {
                flag = false;
            }
        });

        if (flag) {
          document.getElementById('button').style.disabled = false;
          document.getElementById('button').style.opacity = 1;
          document.getElementById('button').style.cursor= 'pointer';
        }else {
          document.getElementById('button').style.disabled = true;
          document.getElementById('button').style.opacity = 0.2;
          document.getElementById('button').style.cursor= 'none';
        }
    });

  }

  

/*
let form =document.getElementById('form');
let formId = Array(form.length);
for(i=0;i<formId.length;i++){
  formId[i] = form[i].id;
}
console.log(form, formId, formId[1]);

let element = Array(formId.length);
let flg = Array(formId.length-1);
flg[0] = true;
flg[1] = true;
for(i=2;i<formId.length-1;i++){
  flg[i]=false;
}

for(i=0;i<formId.length;i++){
  element[i] = document.getElementById(formId[i]);
}
console.log(element,flg);

document.getElementById(formId[i]).addEventListener('change', function() {
  console.log(flg[5] && flg[9] && flg[10]);
  if(select[0].checked){
    if(flg[5] && flg[9] && flg[10]){
        document.getElementById('button').style.disabled = false;
        document.getElementById('button').style.opacity = 1;
        document.getElementById('button').style.pointerEvents = auto;
    }
}else if (select[1].checked){
    if(flg[2] && flg[3] && flg[4] && flg[5] && flg[6] && flg[7] &&flg[8] && flg [9] && flg[10] ){
      document.getElementById('button').style.disabled = false;
      document.getElementById('button').style.opacity = 1;
      document.getElementById('button').style.pointerEvents = auto;
    }
}
});
*/
