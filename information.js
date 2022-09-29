function openInfo() {
  const mediaQuery = window.matchMedia("(max-width: 640px)");
  if (mediaQuery.matches) {
    document.getElementById("information").style.width = "426.6666666px";
  } else {
    document.getElementById("information").style.width = "426.6666666px";
  }
}

function closeInfo() {
  document.getElementById("information").style.width = "0%";
}
