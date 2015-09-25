$(document).ready(function(){
	$('#status').text("jquery is working");
	var streamName = ["freecodecamp", "storbeck", "medryBW"];
	for(i = 0; i<streamName.length; i++){
		console.log(streamName[i]);
		$.ajax({
		type: 'GET',
		url: 'https://api.twitch.tv/kraken/streams/' + streamName[i],
		success: function(data){
			//console.log(data);
			var streamName2 = ["freecodecamp", "storbeck", "medryBW"];
			console.log(streamName2[i-2]);

			if(data.stream === null){
				$('#list').append("<li>" + streamName[i-1] + " is offline</li>");	
			}
			else{
				$('#list').append("<li>" + streamName[i-1] + " is online</li>");
			}
		}
		});
	}
	
});