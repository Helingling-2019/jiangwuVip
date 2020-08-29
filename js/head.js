$(function(){
	
	$('.bannerList li').eq(0).addClass('active').siblings().removeClass('active');
	$('.bannerImg img').eq(0).addClass('active').siblings().removeClass('active');
	$('.bannerList li').mouseover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index();
		$('.bannerImg img').eq(index).addClass('active').siblings().removeClass('active');
	});
	
	
});
