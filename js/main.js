var available = "<div class = \"available\">	Available <img class = \"greencheck\" src = \"img/greencheck.png\"> </div>";
var unavailable = "<div class = \"unavailable\">	Unavailable <img class = \"redx\" src = \"img/redx.png\"> </div>";
$(Blitman).append(available + "<div class = \"updated\">Last updated: Testing</div>" + "<div class = \"timestamp\">Available since: Testing</div>");	
$(BARH).append(available + "<div class = \"updated\">Last updated: Testing</div>" + "<div class = \"timestamp\">Available since: Testing</div>");
$(Commons).append(available + "<div class = \"updated\">Last updated: Testing</div>" + "<div class = \"timestamp\">Available since: Testing</div>");
$(Sage).append(unavailable + "<div class = \"updated\">Last updated: Testing</div>" + "<div class = \"timestamp\">Unavailable since: Testing</div>");	