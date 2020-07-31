$(document).ready(function(){
	$nav=$('nav');
	$togglecollapse=$('.toggle-collapse');

	/*click event*/
	$togglecollapse.click(function(){
		$nav.toggleClass('collapse');
	})

});