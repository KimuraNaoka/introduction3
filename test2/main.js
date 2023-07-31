let imgBox = document.getElementById("img-box");
console.log(imgBox);

function createImage(imgPass) {
  let image = document.createElement("img");
  image.className = "images";
  imgBox.appendChild(image);
  image.style.display = "block";

  let imagePlm = new Promise((resolve, reject) => {
    resolve((image.src = imgPass));
    reject(error);
  });
  return imagePlm;
}

async function wait(s) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
}
/*  確認
console.log(1);
wait(2).then((data) => {
  console.log(data, 2);
});
*/

function deleteImg() {
  let img = document.querySelectorAll("img");
  img.forEach((element) => {
    element.style.display = "none";
  });
}

createImage("img/3_image.jpeg")
  .then((data) => {
    console.log(data);
  })
  .then(() => {
    console.log("完了");
  })
  .then(() => {
    return wait(2);
  })
  .then(() => {
    console.log("2秒後");
  })
  .then(() => {
    deleteImg();
  })
  .then(() => {
    createImage("img/4_image.jpeg");
  })
  .then(() => {
    console.log("完了");
  })
  .then(() => {
    return wait(2);
  })
  .then(() => {
    console.log("2秒後");
  })
  .then(() => {
    deleteImg();
  });
