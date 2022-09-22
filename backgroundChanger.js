const bodyTag = document.querySelector("body");

let imageGallery = [
  "url(./images/williams-joinery-2.jpg)",
  "url(./images/williams-joinery-3.jpg)",
  "url(./images/williams-joinery-4.jpg)",
  "url(./images/williams-joinery-6.jpg)",
  "url(./images/williams-joinery-7.jpg)",
  "url(./images/williams-joinery-8.jpg)",
  "url(./images/williams-joinery-9.jpg)",
  "url(./images/williams-joinery-10.jpg)",
  "url(./images/williams-joinery-11.jpg)",
  "url(./images/williams-joinery-12.jpg)",
];

let counter = 0;

bodyTag.addEventListener("click", () => {
  bodyTag.style.backgroundImage = imageGallery[counter++ % imageGallery.length];
});
