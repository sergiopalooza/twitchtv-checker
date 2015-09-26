$(document).ready(function(){
	$('#status').text("jquery is working");
	var streamName = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb", "medrybw", "thomasballinger", "kolento","noobs2ninjas","beohoff"];
	
	for(i=0; i<streamName.length; i++){
		$.ajax({
		type: 'GET',
		url: 'https://api.twitch.tv/kraken/streams/' + streamName[i],
		success: function(data){
			console.log(data);
			i--; //I have no idea why I need to do this but decrementing it here makes the index work properly (in reverse)
			var streamUrl = data._links.channel;
			var name =  /([^/]+$)/g.exec(streamUrl);
			console.log(streamUrl);
			if(data.stream === null){
				$('#list').append("<div class='off'>" + name[0] + " is offline</div>");	
			}
			else{
				$('#list').append("<div class='on'><a href=" + data.stream.channel.url + ">" + name[0] + " is online</a></div>");
				
			}
		}
		});
	}
	
});