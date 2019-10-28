var groceries = [];
$(document).ready(function()
{
  $("form#grocery").submit(function(event)
  {
    event.preventDefault();
    groceries.push($(".food").val().toUpperCase());

    groceries.sort();

    console.log(groceries);
    });

  $("form#showList").submit(function(event)
    {
      event.preventDefault();

        //console.log(groceries);
        for (x=0; x<groceries.length; x++)
        {
          $(".items1").append("<li>"+groceries[x]+"</li><br>")
          //console.log(groceries);

        }

    });
    /*
    groceries.forEach(function(items){
      var x=0;
      items[x].toUpperCase();
      x++;
    });

    console.log(groceries);
    */

});
