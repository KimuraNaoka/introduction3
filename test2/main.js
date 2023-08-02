const imgBox = document.getElementById("img-box");

function createImage(imgPass) {
  const image = document.createElement("img");
  image.className = "images";
  imgBox.appendChild(image);
  image.style.display = "block";
  const imagePromise = new Promise((resolve, reject) => {
    if (imgPass) {
      image.src = imgPass;
      resolve(image);
    } else {
      reject(Error);
    }
  });
  return imagePromise;
}

function wait(s) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
}

function hiddenImg() {
  let img = document.querySelectorAll("img");
  img.forEach((element) => {
    element.style.display = "none";
  });
}

createImage("img/3_image.jpeg")
  .then(() => {
    console.log("waiting");
    return wait(2);
  })
  .then(() => {
    hiddenImg();
  })
  .then(() => {
    createImage("img/4_image.jpeg");
  })
  .then(() => {
    console.log("waiting");
    return wait(2);
  })
  .then(() => {
    hiddenImg();
  })
  .catch(() => {
    console.log("error!!");
  });
