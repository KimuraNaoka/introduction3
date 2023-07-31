let imgBox = document.getElementById("img-box");

class imageContent {
  //コンストラクタ
  constructor(imgPass) {
    console.log("コンストラクタ実行");
    this.imgPass = imgPass;
  }
  //imgCreateメソッド
  async imageCreate() {
    let image = document.createElement("img");
    image.className = "images";
    imgBox.appendChild(image);
    image.style.display = "block";

    let result = await new Promise((resolve, reject) => {
      resolve((image.src = this.imgPass));
      reject(error);
    });
    console.log("imageCreate実行");
    return result;
  }
  //waitメソッド
  async wait(s) {
    console.log("wait前");
    return await new Promise((resolve) => setTimeout(resolve, s * 1000));
  }
}
function deleteImg() {
  console.log("deleteImg実行");
  let img = document.querySelectorAll("img");
  img.forEach((element) => {
    element.style.display = "none";
  });
}

async function main() {
  const image1 = new imageContent("img/3_image.jpeg");
  await image1.imageCreate();
  await image1.wait(2);
  deleteImg();

  const image2 = new imageContent("img/4_image.jpeg");
  await image2.imageCreate();
  await image2.wait(2);
  deleteImg();
}
main();
