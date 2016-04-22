$.getJSON("http://localhost:8080/data.json", function(json) 
{

    var data = $.parseJSON(JSON.stringify(json));
    console.log(data.id);

    switch (data.id)
	{
		case 0: 
			if (data.available == true)
			{
				$(Blitman).append(available + "<div class = \"updated\">Last updated: " + data.last_updated + "</div>" + "<div class = \"timestamp\">Available since: " + data.availability + "</div>");	
			}

			else if (data.available == false)
			{
				$(Blitman).append(unavailable + "<div class = \"updated\">Last updated: " + data.last_updated + "</div>" + "<div class = \"timestamp\">Unavailable since: " + data.availability + "</div>");	
			}
		break;

		default:
		console.log("Error.");
	}
});


	

var available = "<div class = \"available\">	Available <img class = \"greencheck\" src = \"img/greencheck.png\"> </div>";
var unavailable = "<div class = \"unavailable\">	Unavailable <img class = \"redx\" src = \"img/redx.png\"> </div>";
$(BARH).append(available + "<div class = \"updated\">Last updated: Testing</div>" + "<div class = \"timestamp\">Available since: Testing</div>");
$(Commons).append(available + "<div class = \"updated\">Last updated: Testing</div>" + "<div class = \"timestamp\">Available since: Testing</div>");
$(Sage).append(unavailable + "<div class = \"updated\">Last updated: Testing</div>" + "<div class = \"timestamp\">Unavailable since: Testing</div>");	