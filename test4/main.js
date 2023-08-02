const imgBox = document.getElementById("img-box");

class imageContent {
  constructor(imgPass) {
    this.imgPass = imgPass;
  }

  imageCreate() {
    const image = document.createElement("img");
    image.className = "images";
    imgBox.appendChild(image);
    image.style.display = "block";

    const result = new Promise((resolve, reject) => {
      if (this.imgPass) {
        image.src = this.imgPass;
        resolve(image);
      } else {
        reject(Error);
      }
    });
    return result;
  }

  wait(s) {
    return new Promise((resolve) => setTimeout(resolve, s * 1000));
  }
}

function deleteImg() {
  let img = document.querySelectorAll("img");
  img.forEach((element) => {
    element.style.display = "none";
  });
}

async function main() {
  try {
    const image1 = new imageContent("img/3_image.jpeg");
    await image1.imageCreate();
    await image1.wait(2);
    deleteImg();
    const image2 = new imageContent("img/4_image.jpeg");
    await image2.imageCreate();
    await image2.wait(2);
    deleteImg();
  } catch {
    console.log("error!!");
  }
}

main();
