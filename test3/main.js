const imgBox = document.getElementById("img-box");
console.log(imgBox);

async function createImage(imgPass) {
  const image = document.createElement("img");
  image.className = "images";
  imgBox.appendChild(image);
  image.style.display = "block";

  await new Promise((resolve, reject) => {
    if (imgPass) {
      image.src = imgPass;
      resolve(image);
    } else {
      reject(Error);
    }
  });
}

async function wait(s) {
  await new Promise((resolve) => setTimeout(resolve, s * 1000));
}

function hiddenImg() {
  let img = document.querySelectorAll("img");
  img.forEach((element) => {
    element.style.display = "none";
  });
}
async function main() {
  try {
    await createImage("img/3_image.jpeg");
    await wait(2);
    hiddenImg();
    await createImage("img/4_image.jpeg");
    await wait(2);
    hiddenImg();
  } catch {
    console.log("error!!");
  }
}

main();
