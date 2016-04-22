var connectionError = "<div class = \"unavailable\">Connection Error</div>"
initalize();

function initalize()
{
	var data = null;

	$.getJSON("http://localhost:8080/data.json", function(data)
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
	var available, unavailable;

	for (var i = 0; i <= 3; ++i)
	{
		//TODO - Remove these from the loop... Have to figure out the best way to do that.
		available = "<div class = \"available\">Available <img class = \"greencheck\" src = \"img/greencheck.png\"> </div> <div class = \"updated\">Last updated: " + data.results[i].last_updated + "</div>" + "<div class = \"timestamp\">Available since: " + data.results[i].availability + "</div>";
		unavailable = "<div class = \"unavailable\">Unavailable <img class = \"redx\" src = \"img/redx.png\"> </div> <div class = \"updated\">Last updated: " + data.results[i].last_updated + "</div>" + "<div class = \"timestamp\">Unvailable since: " + data.results[i].availability + "</div>";

		if (data.results[i].available == true)
		{
			console.log(data.results[i].dining_hall);
			$("#" + data.results[i].dining_hall).append(available);
		}

		else
		{
			$("#" + data.results[i].dining_hall).append(unavailable);
		}
	}

}	