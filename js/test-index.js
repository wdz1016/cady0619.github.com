// $(function(){
	/*jsbanner_left开始*/

	// jQuery(document).ready(function($) {
			// 菜单栏小li的划上效果
		;(function(){
			$.fn.mbshop_home_page_V_sub_nav=function(options){

				// 菜单选项栏
				var sub_nav_menuli=options.sub_nav_menuli;
				// 弹框盒子名称
				var sub_nav_pop=options.sub_nav_pop;
				// 显示等待时间
				var sub_nav_wait=options.sub_nav_wait;
				// 右移时间
				var sub_nav_Rmove=options.sub_nav_Rmove;
				// 左移时间
				var sub_nav_Lmove=options.sub_nav_Lmove;
				// 隐藏时间
				var sub_nav_hide=options.sub_nav_hide;


				sub_nav_menuli.mouseenter(function(event) {
					var sub_nav_menu=$(this).find(sub_nav_pop);
					sub_nav_menu.stop().animate({'left':'210px','opacity':'0','z-index':'99'}, sub_nav_wait,function(){
						sub_nav_menu.css('display', 'block').stop().animate({'left':'240px','opacity':'0.7'}, sub_nav_Rmove,function(){
							sub_nav_menu.stop().animate({'left':'239px','opacity':'1'}, sub_nav_Lmove)
						})
					});
				});
				// 菜单栏小li的离开效果
				sub_nav_menuli.mouseleave(function(event) {
					// clearTimeout(sub_nav_timeout)
					var sub_nav_menu=$(this).find(sub_nav_pop);
					sub_nav_menu.stop().animate({'left':'260px','opacity':'0','z-index':'1'}, sub_nav_hide,function(){
						sub_nav_menu.css('display', 'none');
					});
				});	

			}
		})(jQuery)	
			// game over
		// });
	/*jsbanner_left结束*/ 
	/*jsbanner_box开始*/
	;(function($){
		$.fn.mbshop_home_page_V_banner=function(options){
			var banner_speed=options.banner_speed;
			var bg_change=$(options.bg_change);
			var banner_box=$(options.banner_box);
			var banner_pic=$(options.banner_pic);
			var banner_right=$(options.banner_right);
			var banner_left=$(options.banner_left);
			var banner_nav=$(options.banner_nav);
			var banner_nav_menu=$(options.banner_nav_menu);
			var banner_nav_class=options.banner_nav_class;
			// 设定第一个背景图颜色
			var first_bg=banner_pic.eq(0).attr('title');
			bg_change.css('background', first_bg);
			// 设置banner导航宽度
			var banner_nav_width=banner_box.width();
			var nav_li_num=banner_nav_menu.length;
			var nav_li_width=banner_nav_menu.width();
			banner_nav.width(banner_nav_width);
			nav_li_width=banner_nav_width/nav_li_num+'px';
			banner_nav_menu.width(nav_li_width);
			var banner_num=0;
			//
			// banner_pic.mouseover(function(event){
			// 	$('.mbshop_home_page_V_banner_btn').show();
			// })
			// banner_pic.mouseleave(function(event){
			// 	$('.mbshop_home_page_V_banner_btn').hide();
			// })
			// banner右边按钮点击效果
			banner_right.click(function(event) {
				/* Act on the event */
				banner_num++;
				banner_num=banner_num%banner_pic.length;
				banner_nav_menu.eq(banner_num).addClass(banner_nav_class).siblings().removeClass(banner_nav_class);
				banner_pic.fadeOut();
				banner_pic.eq(banner_num).fadeIn().siblings().fadeOut();
				var aaa=banner_pic.eq(banner_num).attr('title');
				bg_change.css('background', aaa);	
			});
			// 左边按钮点击效果
			banner_left.click(function(event) {
				/* Act on the event */
				banner_num--;
				banner_num=banner_num%banner_pic.length;
				banner_nav_menu.eq(banner_num).addClass(banner_nav_class).siblings().removeClass(banner_nav_class);
				banner_pic.fadeOut();
				banner_pic.eq(banner_num).fadeIn().siblings().fadeOut();
				var aaa=banner_pic.eq(banner_num).attr('title');
				bg_change.css('background', aaa);
			});
			// 声明计时器循环开始
			function banner_carousel(){
				banner_num++;
				banner_num=banner_num%banner_pic.length;
				banner_nav_menu.eq(banner_num).addClass(banner_nav_class).siblings().removeClass(banner_nav_class);
				banner_pic.fadeOut();
				banner_pic.eq(banner_num).fadeIn().siblings().fadeOut();
				var aaa=banner_pic.eq(banner_num).attr('title');
				bg_change.css('background', aaa);
			}
			// 计时器循环结束
			// 引用计时器开始
			var banner_showtime=setInterval(banner_carousel, banner_speed);
			// 鼠标划上轮播停止
			banner_box.mouseover(function(event) {
				/* Act on the event */
				clearInterval(banner_showtime);
			});
			banner_box.mouseout(function(event) {
				/* Act on the event */
				clearInterval(banner_showtime);
				banner_showtime=setInterval(banner_carousel, banner_speed);
			});
			// banner导航控制轮播图
			banner_nav_menu.mouseover(function(event) {
				$(this).addClass(banner_nav_class).siblings().removeClass(banner_nav_class);
				/* Act on the event */
				banner_num=$(this).index();
				banner_pic.fadeOut();
				banner_pic.eq(banner_num).fadeIn().siblings().fadeOut();
				var aaa=banner_pic.eq(banner_num).attr('title');
				bg_change.css('background', aaa);
			});
		}

		// 声明需要效果的图片盒子
		$.fn.blink=function(options){

			// 声明需要效果的图片盒子
			var blink=options.blink;
			blink.find('img').mouseover(function(){
				$(this).stop().animate({opacity:0.7},200,function(){
					$(this).stop().animate({opacity:0.8},200);
				})
			})
			blink.find('img').mouseout(function(){
				$(this).stop().animate({opacity:1},200)
			})
		}

		// 给热门商品li单独声明需要效果的图片盒子
		$.fn.zyHot_Brand_blink=function(options){

			// 声明需要效果的li
			var zyHot_Brand_blink=options.zyHot_Brand_blink;
			zyHot_Brand_blink.find('li').mouseover(function(){
				$(this).stop().animate({opacity:0.7},200,function(){
					$(this).stop().animate({opacity:0.8},200);
				})
			})
			zyHot_Brand_blink.find('li').mouseout(function(){
				$(this).stop().animate({opacity:1},200)
			})
		}
	})(jQuery)
	/*jsbanner_box结束*/
	// 倒计时开始
	// var interval = 1000; 
		// function ShowCountDown(year,month,day,divname) 
		// 	{ 
		// 	var now = new Date(); 
		// 	var endDate = new Date(year, month-1, day); 
		// 	var leftTime=endDate.getTime()-now.getTime(); 
		// 	var leftsecond = parseInt(leftTime/1000); 
		// 	//var day1=parseInt(leftsecond/(24*60*60*6)); 
		// 	var day1=Math.floor(leftsecond/(60*60*24)); 
		// 	var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
		// 	var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
		// 	var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
		// 	var cc = document.getElementById(divname); 
		// 	cc.innerHTML = ""+hour+":"+minute+":"+second+""; 
		// 	} 
		// window.setInterval(function(){ShowCountDown(2010,4,20,'index_time_down');}, interval);
	// 倒计时开始结束
	//返回顶部
    var num2=$(window).height();
    // 小火箭隐藏
    $(window).scroll(function(e) {
        var num1=$(window).scrollTop();
        if(num1>num2){
            $('.Zbigprom_sub_nav_left_box,.Zbigprom_sub_nav_right_box').fadeIn();
        }else{
            $('.Zbigprom_sub_nav_left_box,.Zbigprom_sub_nav_right_box').fadeOut();
        }
    });
    // 左边返回顶部
    $('.Zbigprom_sub_nav_left_box ul li').eq(8).click(function(e) {
        $('html,body').animate({scrollTop:0},500);
    });
// });