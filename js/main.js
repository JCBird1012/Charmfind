var available = "<div class = \"available\">	Available <img class = \"greencheck\" src = \"img/greencheck.png\"> </div>";
var unavailable = "<div class = \"unavailable\">	Unavailable <img class = \"redx\" src = \"img/redx.png\"> </div>";
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
	if (data != null)
	{

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
			break;
			
		}
	}

}	