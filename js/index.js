// 导航
	$(document).ready(function(){
		///随屏幕滚动显隐头部导航
    $(window).on('scroll',function(){
		if($(window).scrollTop() > 50){
		    $('.m-navigation-box').fadeOut(300);
		}else{
		    $('.m-navigation-box').fadeIn(300);
		}
       /*  showMain();*/
    });
		  
	   $('.m-navigation ul li').on('mouseover',function(){
	   			$('.m-navigation-list').hide();
	   })
	   $('.m-navigation ul .navigation-click').on('mouseover',function(){
	   			$(this).find('.m-navigation-list').show();
	   })
	   $('.m-navigation').on('mouseout',function(){
	   		  $('.m-navigation-list').hide();
	   }) 
	   $('.m-nav ul li').on('mouseover',function(){
	   			$('.m-nav-list').hide();
	   })
	   $('.m-nav ul .nav-click').on('mouseover',function(){
	   			$(this).find('.m-nav-list').show();
	   })
	   $('.m-nav').on('mouseout',function(){
	   		  $('.m-nav-list').hide();
	   }) 
	  /* Object.style.maxHeight=300px;
	   Object.style.display=none; */
	   /* 轮播图*/
	   
		$('.xia-contentbox ul li').on('mouseover',function(){
					$('.m-navigation-list').hide();
		})
		$('.xia-contentbox ul .navigation-click').on('mouseover',function(){
					$(this).find('.m-navigation-list').show();
		})
		$('.xia-contentbox').on('mouseout',function(){
				  $('.m-navigation-list').hide();
		}) 
		
	 })
	/* $(function(){
		var m_swiperv = new Swiper('#m-swiperv',{
					          // autoplay:true,  //自动切换
			  autoplay:6000,
			  loop : true,    //循环
					    });
						var galleryThumbs = new Swiper('.gallery-thumbs', {
						      spaceBetween: 10,
						      slidesPerView: 4,
						      loop: true,
						      freeMode: true,
						      loopedSlides: 6, //looped slides should be the same
						      watchSlidesVisibility: true,
						      watchSlidesProgress: true,
						    });
						    var galleryTop = new Swiper('.gallery-top', {
						      spaceBetween: 10,
						      loop:true,
						      loopedSlides: 6, //looped slides should be the same
						      thumbs: {
						        swiper: galleryThumbs,
						      },
						    });
	 }) */
	