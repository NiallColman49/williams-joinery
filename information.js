function openInfo() {
  const mediaQuery = window.matchMedia("(max-width: 640px)");
  if (mediaQuery.matches) {
    document.getElementById("information").style.width = "100%";
  } else {
    document.getElementById("information").style.width = "30%";
  }
}

function closeInfo() {
  document.getElementById("information").style.width = "0%";
}
