console.log("%c HI", "color: firebrick");
document.addEventListener("DOMContentLoaded", () => {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then((links) => linksFn(links.message));

  fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((links) => challengeFn2(links.message));
  const select = document.querySelector("select");
  select.addEventListener("click", () => {
    const selValue = select.value;
    const lis = document.querySelectorAll("li");
    lis.forEach((li) => {
      if (!li.textContent.startsWith(selValue)) {
        li.style.display = "none";
      } else {
        li.style.display = "block";
      }
    });
  });
});
function linksFn(links) {
  links.forEach((link) => {
    const container = document.querySelector("div#dog-image-container");
    const imgElement = document.createElement("img");
    imgElement.src = link;
    container.appendChild(imgElement);
  });
}

function challengeFn2(links) {
  for (let link in links) {
    const dogBreedsUl = document.querySelector("ul#dog-breeds");
    const li = document.createElement("li");
    li.append(link);
    li.style.cursor = "pointer";
    li.addEventListener("click", () => {
      li.style.color = "green";
    });
    dogBreedsUl.appendChild(li);
  }
}
