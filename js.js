
function wipAlert() {
  alert("Work in progress!");
}

let elms = document.getElementsByClassName("navelm");

for (let i = 0; i < elms.length; i++) {
  if (!elms[i].classList.contains("underline")){
    elms[i].onclick = wipAlert;
  }
}
