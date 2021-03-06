var connectionError = "<div class = \"unavailable\">Connection Error</div>"
initalize();
$(".dininghalls").on('click', 'button.update', function () {
  $(this).fadeOut(500);
  var buttons = $("<button class = 'available'>Available</button><button class = 'unavailable'>Unavailable</button>").hide().fadeIn(500);
  $(this).replaceWith(buttons);
});

$(".dininghalls").on('click', 'button.available', function () {
   var target = $(event.target).parent().parent().parent(), index = $(target).index();
   var button = $(this);
   update(button, index, true);
});

$(".dininghalls").on('click', 'button.unavailable', function () {
   var target = $(event.target).parent().parent().parent(), index = $(target).index();
   var button = $(this);
   update(button, index, false)
});

function initalize()
{
	var data = null;

	$.getJSON("data.json", function(data)
	{

    	data = $.parseJSON(JSON.stringify(data));
    	evalulate(data);
    	
	})

	.fail(function(data)
	{
		$(".dininghall").append(connectionError);
	});
}

function evalulate(data)
{
	var available, unavailable, updateButton;

	for (var i = 0; i <= 3; ++i)
	{
		//TODO - Remove these from the loop... Have to figure out the best way to do that.
		available = "<div class = \"available\">Available <img class = \"greencheck\" src = \"img/greencheck.png\"> <div class = \"updated\">Last updated: " + data.results[i].last_updated + "</div>" + "<div class = \"timestamp\">Available since: " + data.results[i].availability + "</div> <button class = 'update'>Update</button> </div>";
		unavailable = "<div class = \"unavailable\">Unavailable <img class = \"redx\" src = \"img/redx.png\"> <div class = \"updated\">Last updated: " + data.results[i].last_updated + "</div>" + "<div class = \"timestamp\">Unvailable since: " + data.results[i].availability + "</div> <button class = 'update'>Update</button> </div>";

		if (data.results[i].available == true)
		{
			$("#" + data.results[i].dining_hall).append(available);
		}

		else
		{
			$("#" + data.results[i].dining_hall).append(unavailable);
		}
	}
}

function update(button, index, available)
{
   $.post( "/data/update", { id: index, available: available } ).done(function (data) {
        respond(data);
   }); 
   
   function respond(res)
   {
      var response = $("<p style = 'font-size:10pt; display: inline-block;'>" + res + "</p>").fadeIn(500);
      //We want to hide both buttons, not just the button clicked.
      button.parent().find("button").hide();
      button.replaceWith(response);
      
      if (
         res === "Updated." || res === "Last updated renewed.")
         {
             response.css('color', '#27ae60');
             setTimeout("location.reload(true);", 500);
         }
      
      else
         {
            response.css('color', '#e74c3c');
         }
   }
}