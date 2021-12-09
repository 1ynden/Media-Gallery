(function() {
	var $content= $('#ex1').detach();

	$('#btn1').click(function() {
		modal.open({content: $content, width:340,height:300});
	});
}()) ;
