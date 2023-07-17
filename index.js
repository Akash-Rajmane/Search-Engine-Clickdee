let query = document.querySelector(".query");
let searchBtn = document.getElementById("searchBtn");

function searchFunction() {
  let url = "https://www.google.com/search?q=" + query.value;
  //window.open(url, "_self");
  //window.location.assign(url);
  window.location.href = url;
}

searchBtn.onclick = searchFunction;
