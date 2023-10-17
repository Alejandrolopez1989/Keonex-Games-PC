function searchPage() {
    var searchText = document.getElementById("search-input").value.toLowerCase();
    var pageContent = document.body.innerHTML;
  
    if (searchText !== "") {
      var regex = new RegExp("(" + searchText + ")", "gi");
      var highlightedContent = pageContent.replace(regex, "<mark>$1</mark>");
      document.body.innerHTML = highlightedContent;
  
      var elements = document.getElementsByTagName("mark");
      if (elements.length > 0) {
        elements[0].scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }