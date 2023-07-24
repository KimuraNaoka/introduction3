const button = document.getElementById('submit');
const breed = document.getElementById('breed-input');
const image = document.getElementById('img');

let url="";

breed.addEventListener('change', ()=>{
  console.log(breed.value);
  url = 'https://dog.ceo/api/breeds/image/random'

  url = url + '?breed=' + breed.value;
  console.log(url);
})
console.log(url)
// ボタンをクリックしたらイベント発動
button.addEventListener('click', () => {

  //ＵＲＬからデータを読み込む
fetch(url)
//データを受け取って加工（成形）する
.then((response)=>{
  return response.json()

})
//前のthenでreturnされたものがdata（引数）に渡される
.then((data)=>{
  console.log('成功',data);
  image.src = data['message'];
})

});