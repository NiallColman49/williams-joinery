let loader = document.querySelector(".loader");

const vanish = () => {
  loader.classList.add("disappear");
};

window.addEventListener("load", vanish);
