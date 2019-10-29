
$(document).ready(function(){
  $(".cart").submit(function(event){
    event.preventDefault();
    $(".cart").hide();
    var items = $("#item").val().split(", ").sort();
    var itemsUpperCase = items.map(function(item){
      return item.toUpperCase();
    })
    itemsUpperCase.forEach(function(item){
      $(".result").append("<li>" + item + "</li>");
    });
  });
});
