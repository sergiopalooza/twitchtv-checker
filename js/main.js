$(document).ready(function(){
	$('#status').text("jquery is working");
	var streamName = 'freecodecamp';
	$.ajax({
		type: 'GET',
		url: 'https://api.twitch.tv/kraken/streams/' + streamName,
		success: function(data){
			console.log(data.stream);
			if(data.stream === null){
				$('#list').append("<li>" + streamName + " is offline</li>");	
			}
			else{
				$('#list').append("<li>" + streamName + " is online</li>");
			}
		}
	});
});