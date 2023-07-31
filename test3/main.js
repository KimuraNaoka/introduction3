let imgBox = document.getElementById("img-box");
console.log(imgBox);

async function createImage(imgPass) {
  let image = document.createElement("img");
  image.className = "images";
  imgBox.appendChild(image);
  image.style.display = "block";

  await new Promise((resolve, reject) => {
    resolve((image.src = imgPass));
    reject(error);
  });
}

async function wait(s) {
  await new Promise((resolve) => setTimeout(resolve, s * 1000));
}

function deleteImg() {
  let img = document.querySelectorAll("img");
  img.forEach((element) => {
    element.style.display = "none";
  });
}
async function excution() {
  await createImage("img/3_image.jpeg");
  await wait(2);
  deleteImg();
  await createImage("img/4_image.jpeg");
  await wait(2);
  deleteImg();
}

excution();
