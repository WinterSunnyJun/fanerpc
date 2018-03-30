$(function(){
		//首页布局
	var WW = $(window).width();
	var HH = $(window).height();
	$('.sj-swiper').css('height',HH);
	$('.index-nav li').css('width',WW/9);
	$('.index-nav').css('width',WW);
	$('.index-nav li').css('height',WW/9*0.68);
	$('.index-piclist').css('height',300-WW/9*0.68);
	//导航
	$('.nav li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	$('.sidenav li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	
		//读者俱乐部选项
		
	$('.checkbox').click(function(){
		
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		}else{
			$(this).addClass('active').parent().siblings().find('.checkbox').removeClass('active');
		}
//		else{
//			$(this).addClass('active').parent().siblings().find('.checkbox').removeClass('active');
//			$(this).addClass('active').parent('.title').parent().siblings().find('.checkbox').removeClass('active');
//		}
	})
	
	
	$('.read').click(function(){
		$(this).siblings('.con').css('height','auto');
		$(this).hide();
		$(this).siblings('.mask').hide()
		$('.read2').show();
	})
	
	$('.read2').click(function(){
		$(this).siblings('.con').css('height','100px');
		$(this).hide();
		$(this).siblings('.mask').show();
		$('.read').show();
	})
	//内容页点赞
  var zanNum=$('.zsj-vedio-ui .zan-num').html();
	var zanNum = 0;
	$('.zsj-vedio-ui .icon').click(function () {
		zanNum++;
		$('.zsj-vedio-ui .zan-num').html(zanNum);
	})
  //首页轮播
  var swiper = new Swiper('.sj-swiper',{
		pagination:'.swiper-pagination',
		slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true
	});

	//家分享图片点赞
	var heart = $('.support .icon');
	var heartNum = $('.supportNum').html();
	    heartNum = 0;
	$('.supportNum').html(heartNum);
	
	heart.click(function(){
		$(this).find('img').attr('src','img/support1.png');
		var heartNow = $(this).siblings('.supportNum').html();
		heartNow++;
		$(this).siblings('.supportNum').html(heartNow);
	})
	
})
