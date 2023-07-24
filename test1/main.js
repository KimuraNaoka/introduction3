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

button.addEventListener('click', () => {


fetch(url)

.then((response)=>{
  return response.json()

})

.then((data)=>{
  console.log('成功',data);
  image.src = data['message'];
})

});