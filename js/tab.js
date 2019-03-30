$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

	
	$('ul.drug li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.drug li').removeClass('current');
		$('.drug-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
	
	$('.next_pag').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(".tab-link").addClass('hello');
		$("#"+tab_id).addClass('current');

	});

})