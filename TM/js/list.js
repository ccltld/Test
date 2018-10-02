// 轮播
$(function(){
		//全部变量
		var m=0;
		//封装函数 方便调用

		function bgColor(){
				if(m==0){
					$('#list').css('background-color','rgb(232,232,232)');
				}else if(m==1){
					$('#list').css('background-color','#ECEEEB');
				}else if(m==2){
					$('#list').css('background-color','rgb(232,232,232)');
				}else if(m==3){
					$('#list').css('background-color','#1F2537');
				}else if(m==4){
					$('#list').css('background-color','#EBEBEB');
				}
				// else if(m==5){
				// 	$('#list').css('background-color','#FF2D6F');
				// }
		}
		function run(){
			timer=setInterval(function(){
				//下标自增
				m++;
				//判断下标
				if(m>4){
					m=0
				}
				// if(m=1){
				bgColor();
				// }
				//显示图片
				$('.img li').eq(m).fadeIn(1000).siblings('li').fadeOut(1000);
				//显示数字
				$('.num li').eq(m).addClass('show').siblings('li').removeClass('show');
			},3000)
		
		}
		//首次调用函数 轮播
		run();
		
		//设置数字显示对应的图片
		//容器鼠标移入移出
		$('.lun').mouseenter(function(){
			//清除定时器
			clearInterval(timer);
			
			//鼠标移入数字 显示对应的图片
			$('.num li').click(function(){
				//获取当前li的下标
				m=$(this).index();
				//显示图片
				$('.img li').eq(m).fadeIn(1000).siblings('li').fadeOut(1000);
				//显示数字
				$('.num li').eq(m).addClass('show').siblings('li').removeClass('show');
			
				bgColor();
				})

				
				
			})
			$('.lun').mouseleave(function(){
					//继续轮播
					run();
		})
		
	})
// 轮播2
$(function(){
		//全部变量
		var n=0;
		//封装函数 方便调用

		// function bgColor(){
		// 		if(m==0){
		// 			$('.main-brand').css('background-color','rgb(232,232,232)');
		// 		}else if(m==1){
		// 			$('.main-brand').css('background-color','#ECEEEB');
		// 		}else if(m==2){
		// 			$('.main-brand').css('background-color','rgb(232,232,232)');
		// 		}else if(m==3){
		// 			$('.main-brand').css('background-color','#1F2537');
		// 		}else if(m==4){
		// 			$('.main-brand').css('background-color','#EBEBEB');
		// 		}else if(m==5){
		// 			$('.main-brand').css('background-color','#FF2D6F');
		// 		}
		// }
		function runn(){
			timmer=setInterval(function(){
				//下标自增
				n++;
				//判断下标
				if(n>3){
					n=0
				}
				// if(m=1){
				// bgColor();
				// }
				//显示图片
				$('.img2 li').eq(n).fadeIn(1000).siblings('li').fadeOut(1000);
				//显示数字
				$('.num2 li').eq(n).addClass('show2').siblings('li').removeClass('show2');
			},2000)
		
		}
		//首次调用函数 轮播
		runn();
		
		//设置数字显示对应的图片
		//容器鼠标移入移出
		$('.lun2').mouseenter(function(){
			//清除定时器
			clearInterval(timmer);
			
			//鼠标移入数字 显示对应的图片
			$('.num2 li').click(function(){
				//获取当前li的下标
				n=$(this).index();
				//显示图片
				$('.img2 li').eq(n).fadeIn(1000).siblings('li').fadeOut(1000);
				//显示数字
				$('.num2 li').eq(n).addClass('show2').siblings('li').removeClass('show2');
			
				// bgColor();
				})

				
				
			})
			$('.lun2').mouseleave(function(){
					//继续轮播
					runn();
		})
		
	})

//选项卡
$(function(){
	$('.tuijian-nav div').click(function(){
		var index=$(this).index();

		$('.tuijian-nav div').eq(index).addClass('active').siblings('div').removeClass('active');
		$('.tuijian-img div').eq(index).addClass('active2').siblings('div').removeClass('active2');
	})
})


//滚动
	$(function(){
		//全部变量
		var c=0;
		//封装函数 方便调用
		function runnn(){
			/*timmmer=setInterval(function(){
				//下标自增
				c++;
				//判断下标
				if(c>2){
					c=0;
				}
				//显示图片
				$('.brand').css({marginLeft:-c*285+'px'}).addClass('show').css({transition:'all 1s'}).siblings('div').removeClass('show');

				// $('.brand div').eq(m).addClass('show').css({transition:'all 1s'}).siblings('div').removeClass('show');
				//显示数字
				console.log($('.circular ul li').eq(c).addClass('ll'))
				$('.circular ul li').eq(c).addClass('ll').siblings('li').removeClass('ll');
			},1000)*/
		
		}
		//首次调用函数 轮播
		runnn();
		
		//设置数字显示对应的图片
		//容器鼠标移入移出
		$('.brand-paend').mouseenter(function(){
			//清除定时器
			// clearInterval(timmmer);
			//左右箭头显示
			// $('#lr').show();
			
			//鼠标移入数字 显示对应的图片
			$('.dian li').click(function(){
				//获取当前li的下标
				c=$(this).index();
				//显示图片
				$('.brand').css({marginLeft:-c*285+'px'}).addClass('show').css({transition:'all 1s'}).siblings('div').removeClass('show');
				//显示数字
				// $('.circular ul li').eq(c).addClass('ll').siblings('li').removeClass('ll');
				$(this).addClass('ll').siblings('li').removeClass('ll');
				// console.log($('.circular ul li').length)
			
			})
			
		}).mouseleave(function(){
			//继续轮播
			runnn();
			//箭头回家移出
			// $('#lr').hide();
		})
		
	
	
 // 返回顶部
$(function(){
	var d=$(document).scrollTop();
	if(d>=300){
		$('.right-nav-tm7').css('opacity','1').css('transition','all 0s');
	}else{
		$('.right-nav-tm7').css('opacity','0').css('transition','all 0s');
	}
$(window).scroll(function(){
		var d=$(document).scrollTop();
		if(d>=300){
			$('.right-nav-tm7').css('opacity','1').css('transition','all 1.5s');
		}else{
			$('.right-nav-tm7').css('opacity','0').css('transition','all 1.5s');
		}

	})
})
$(function(){
		$('.right-nav-tm7').click(function(){
			clearInterval(timer);
			var top = $(document).scrollTop();
			timer = setInterval(function(){
				top = top - 100;
				if(top<0){
					$(document).scrollTop('0');
					clearInterval(timer);
				}
				$(document).scrollTop(top);
			},1)
		})
	})
})

//楼层
$(function(){
	// var c=$(window).height();
	var a=$(document).scrollTop();
	if(a>=300){
		$('#left-nav').css({'height':'369px','width':'36px','transition':'all 0s'});
	}else{
		$('#left-nav').css({'height':'0px','width':'0px','transition':'all 0s'});
	}
	$(window).scroll(function(){
		// var c=$(window).height();
		var a=$(document).scrollTop();
		if(a>=300){
			$('#left-nav').css({'height':'369px','width':'36px','transition':'all 1s'});
		}else{
			$('#left-nav').css({'height':'0px','width':'0px','transition':'all 1s'});
		}
	})
})

$(function(){
	function nav(j){
			if(j==0){
				$('.left-nav-a').eq(0).css('background','#64c333');
			}else if(j==1){
				$('.left-nav-a').eq(1).css('background','#000');
			}else if(j==2){
				$('.left-nav-a').eq(2).css('background','#EA5F8D');
			}else if(j==3){
				$('.left-nav-a').eq(3).css('background','#0AA6E8');
			}else if(j==4){
				$('.left-nav-a').eq(4).css('background','#64C333');
			}else if(j==5){
				$('.left-nav-a').eq(5).css('background','#F15453');
			}else if(j==6){
				$('.left-nav-a').eq(6).css('background','#19C8A9');
			}else if(j==7){
				$('.left-nav-a').eq(7).css('background','#000');
			}
	
	}

	$('.left-nav-a').click(function(){
		var index=$(this).index();
		console.log($(this).index())

		var top=$('.tm-cen').eq(index).offset().top;

		console.log(top);

		$('html').animate({scrollTop:top},500);
		$('.left-nav-a').css('background','rgba(0,0,0,0.6)');
		nav(index);
	})

})
$(function(){
	
	$('.tm-1').hover(function(){
		$(this).find('.right-nav-zi').css({'transform': 'translate(5px)',transition:' all 1s',opacity: 1})
	},function(){
		$(this).find('.right-nav-zi').css({'transform': 'translate(-30px)',transition:' all 1s',opacity: 0})
	})
})
//模仿瀑布
$(function(){
	$(document).scroll(function(){
		var a=$(document).scrollTop();
		var b=$(window).scrollTop();
		if(a-b){

		}
	})
})