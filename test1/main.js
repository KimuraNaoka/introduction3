const button = document.getElementById("submit");
const breed = document.getElementById("breed-input");
const image = document.getElementById("img");

button.addEventListener("click", () => {
  const url = "https://dog.ceo/api/breed/" + breed.value + "/images/random";
  console.log(url);
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("成功", data);
      image.src = data["message"];
    });
});
