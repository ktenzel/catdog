$(document).ready(function() {
  $("img#dog").click(function() {
    $("ul#user").prepend("<li>Woof!</li>");
        $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });

  });

  $("img#cat").click(function() {
    $("ul#webpage").prepend("<li>Purrrr</li>");
    $("ul#webpage").children("li").first().click(function(){
      $(this).remove();
    });
  });
});
