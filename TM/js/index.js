// 轮播
$(function(){
		//全部变量
		var m=0;
		//封装函数 方便调用

		function bgColor(){
				if(m==0){
					$('.main-banner').css('background-color','rgb(232,232,232)');
				}else if(m==1){
					$('.main-banner').css('background-color','#ECEEEB');
				}else if(m==2){
					$('.main-banner').css('background-color','rgb(232,232,232)');
				}else if(m==3){
					$('.main-banner').css('background-color','#1F2537');
				}else if(m==4){
					$('.main-banner').css('background-color','#EBEBEB');
				}else if(m==5){
					$('.main-banner').css('background-color','#FF2D6F');
				}
		}
		function run(){
			timmer=setInterval(function(){
				//下标自增
				m++;
				//判断下标
				if(m>5){
					m=0
				}
				// if(m=1){
				bgColor();
				// }
				//显示图片
				$('.img li').eq(m).addClass('show').siblings('li').removeClass('show');
				//显示数字
				$('.num li').eq(m).addClass('show').siblings('li').removeClass('show');
			},1000)
		
		}
		//首次调用函数 轮播
		run();
		
		//设置数字显示对应的图片
		//容器鼠标移入移出
		$('.main-banner-con').mouseenter(function(){
			//清除定时器
			clearInterval(timmer);
			
			//鼠标移入数字 显示对应的图片
			$('.num li').mouseenter(function(){
				//获取当前li的下标
				m=$(this).index();
				//显示图片
				$('.img li').eq(m).addClass('show').siblings('li').removeClass('show');
				//显示数字
				$('.num li').eq(m).addClass('show').siblings('li').removeClass('show');
			
				bgColor();
				})

				
				
			})
			$('.main-banner-con').mouseleave(function(){
					//继续轮播
					run();
		})
		
	})

// var arr=[
// 	['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png','11.png','12.png','13.png','14.png','15.png','16.png','17.png','18.png','19.png','20.png','21.png','22.png','23.png','24.png','25.png','26.png','27.png','28.png','29.png',],
// 	[''],
// 	[]
// ]
// 翻滚
$(function(){
	var arr1=['1','2','3','4','5','6','7','8','9','10','1','2','3','4','5','6','7','8','9','10','1','2','3','4','5','6','7','8','9',]
	function demo(){
		$('.brand-lest1').html(`<li class="brand-item huan">
				<a href="javascript:;">
					<i class="iconfont icon-shuaxin"></i>
					<span class="btn-text">换一批</span>
				</a>
			</li>`);
		for(var i = 0; i<29; i++){
			var HTML = $('.brand-lest1').html();
			var rand = Math.floor(Math.random()*29+1);
			$('.brand-lest1').html(`<li class="brand-item">
					<a href="javascript:;">
						<div class="brand-img" style="width:122px;">
							<img src="images/list`+rand+`.png">
						</div>
						<div class="brand-yin" style="width:122px;">`+`<b class="brand-b">`+arr1[rand]+`</b>`+`
							<div class="brand-click">`+`<a class="brand-a" href="javascript:;">点击进入</a>`+`
							</div>	
						</div>
					</a>
				</li>`+HTML);
		}
	}
	demo();
	
	$('.huan').live('click',function(){
		demo();
		var len = $('.brand-item').length - 1;
		for(let i=0; i<len; i++){
			//let ES6 定义变量 ，块级作用域，一个｛｝就是一个作用域
			rotate(i);
		}
		function rotate(i){
			var random = Math.random()*1000;
			setTimeout(function(){
				$('.brand-item').eq(i).css({'transition':'all 1s','transform':'rotateY(360deg)'});
			},random);
		}
		
	})
})

// 选项卡
var n=0;
// li标签的鼠标移入事件
$(function(){
	function runn(){

		timer=setInterval(function(){
				//下标自增
			n++;
				//判断下标
			if(n>1){
					n=0
			}
			// if(m=1){
			// }
			//显示图片
			$('.floor-tabs-head li').eq(n).addClass('selected').siblings('li').removeClass('selected');
			//显示数字
			$('.floor-tab-detail').eq(n).addClass('show1').siblings('div').removeClass('show1');
		},1000)			
	}
		//首次调用函数 轮播
		runn();

		$('.floor-tabs-con ul li').mouseenter(function(){
		//显示当前li的背景色其余li的背景去掉
		// $(this).addClass('selected').siblings().removeClass('selected');
		clearInterval(timer);
			//对应的内容 需要当前li的下标
		var index=$(this).index();
		console.log(index);
			
			//显示对应的内容
		$('.floor-tabs-head li').eq(index).addClass('selected').siblings('li').removeClass('selected');
			//显示数字
		$('.floor-tab-detail').eq(index).addClass('show1').siblings('div').removeClass('show1');
	})
		$('.floor-tabs-con ul li').mouseleave(function(){
			runn()
	})

})

/*下拉搜索框*/ 
	$(window).scroll(function(){
		var d=$(window).height();
		var a=$(document).scrollTop();
		if(a>=d){
			$('#big-nav').css('opacity','1').css('height','50px').css('transition','all 1.5s');
		}else{
			$('#big-nav').css('opacity','0').css('height','0px').css('transition','all 1.5s');
		}
	})

// 回到顶部
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


// left-nav
$(function(){
	var c=$(window).height();
	var a=$(document).scrollTop();
	if(a>=c){
		$('#left-nav').css({'height':'369px','width':'36px','transition':'all 0s'});
	}else{
		$('#left-nav').css({'height':'0px','width':'0px','transition':'all 0s'});
	}
	$(window).scroll(function(){
		var c=$(window).height();
		var a=$(document).scrollTop();
		if(a>=c){
			$('#left-nav').css({'height':'369px','width':'36px','transition':'all 1s'});
		}else{
			$('#left-nav').css({'height':'0px','width':'0px','transition':'all 1s'});
		}
	})
})

// 楼层
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

		var top=$('.tm-cen').eq(index-1).offset().top;

		console.log(top);

		$('html').animate({scrollTop:top},500);
		$('.left-nav-a').css('background','rgba(0,0,0,0.6)');
		nav(index-1);
	})

})
$(function(){
	
	$('.tm-1').hover(function(){
		$(this).find('.right-nav-zi').css({'transform': 'translate(5px)',transition:' all 1s',opacity: 1})
	},function(){
		$(this).find('.right-nav-zi').css({'transform': 'translate(-30px)',transition:' all 1s',opacity: 0})
	})
})