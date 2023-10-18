function searchPage() {
  var searchInput = document.getElementById("search-input").value.toLowerCase();
  var gameCovers = document.getElementsByClassName("game-cover");
  var exactMatch = false;

  for (var i = 0; i < gameCovers.length; i++) {
    var gameTitle = gameCovers[i].getElementsByTagName("h3")[0].textContent.toLowerCase();
    var gameCoverLink = gameCovers[i].getElementsByTagName("a")[0];

    var wordLength = gameTitle.length;
    var matchThreshold = Math.ceil(wordLength * 0.6);

    if (
      gameTitle === searchInput ||
      gameTitle.substring(0, 3) === searchInput.substring(0, 3) ||
      gameTitle.substring(0, matchThreshold) === searchInput.substring(0, matchThreshold)
    ) {
      gameCovers[i].style.display = "";
      gameCoverLink.scrollIntoView();
      exactMatch = true;
    } else {
      gameCovers[i].style.display = "none";
    }
  }

  if (!exactMatch) {
    for (var i = 0; i < gameCovers.length; i++) {
      gameCovers[i].style.display = "";
    }
    alert("No se encontró una coincidencia exacta. Se muestran todos los resultados.");
  }
}
