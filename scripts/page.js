// Load content from txt-file into content div. (Cross origin errors in browser if local file txt is loaded, hence the URL to github)
$(document).ready(function() {
	$.get("https://raw.githubusercontent.com/MJPhillip/august-full-time-project/master/students-favourite-cake.txt", function(response) {
		var dataFromFile = response.replace(/\n/g, "<br />"); //Replace "special character - new line" with html break (br)
		$('.content').append(dataFromFile); //Append data to content div
	})
});