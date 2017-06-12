$(document).ready(function() {
  
 

  $("#inpt_search").keypress(function(e) {
    if (e.which == 13) {
      buscar();
    }
  });
  
  $("#enter").on("click", function(){
    buscar();
  });
  
  function buscar(){
    $(".content").remove();
    var busca = $('#inpt_search').val();

    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&uselang=user&list=search&srsearch=" + busca + "&srprop=snippet&format=json&callback=?", function(data) {
      var link = "https://en.wikipedia.org/?title=";
      var search = data.query.search;
      var title = [],
      snippet = [];
      for (var i in search) {
        snippet.push(search[i].snippet);
        title.push(search[i].title);
        $('section').append("<div class=\"row content\"><a href=\'" + link + title + "' target = \"_blank\"><h2>" + title[i] + "</h2></br><p>" + snippet[i] + "</p></div>");
      }

    });

  }
});