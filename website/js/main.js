var connectionError = "<div class = \"unavailable\">Connection Error</div>"
initalize();
$(".dininghalls").on('click', 'button.update', function () {
  $(this).fadeOut(500);
  var id = $(this).closest("div").attr("id")
  var test = $("<button class = 'available'>Available</button><button class = 'unavailable'>Unavailable</button>").hide().fadeIn(500);
  $(this).replaceWith(test);
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
		available = "<div class = \"available\">Available <img class = \"greencheck\" src = \"img/greencheck.png\"> </div> <div class = \"updated\">Last updated: " + data.results[i].last_updated + "</div>" + "<div class = \"timestamp\">Available since: " + data.results[i].availability + "</div>";
		unavailable = "<div class = \"unavailable\">Unavailable <img class = \"redx\" src = \"img/redx.png\"> </div> <div class = \"updated\">Last updated: " + data.results[i].last_updated + "</div>" + "<div class = \"timestamp\">Unvailable since: " + data.results[i].availability + "</div>";
		updateButton = "<button class = 'update'>Update</button>";

		if (data.results[i].available == true)
		{
			$("#" + data.results[i].dining_hall).append(available + updateButton);
		}

		else
		{
			$("#" + data.results[i].dining_hall).append(unavailable + updateButton);
		}
	}

}