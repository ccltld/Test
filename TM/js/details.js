//放大镜
$(function(){
		$('.tb-booth').mousemove(function(e){
			$('.detail-move,.big-img').show();
			var x=e.pageX-$(this).offset().left;
			var y=e.pageY-$(this).offset().top;

			var x=x-$('.detail-move').width()/2;
			var y=y-$('.detail-move').height()/2;

			if(x<=0){
				x=0
			}else if(x>=$('.tb-booth').width()-$('.detail-move').width()){
				x=$('.tb-booth').width()-$('.detail-move').width();
			}
			if(y<=0){
				y=0
			}else if(y>=$('.tb-booth').height()-$('.detail-move').height()){
				y=$('.tb-booth').height()-$('.detail-move').height()
			}

			$('.detail-move').css({left:x,top:y})

			var xx=$('.tb-booth').width()/$('.detail-move').width()*$('.tb-booth').width();
			var yy=$('.tb-booth').height()/$('.detail-move').height()*$('.tb-booth').height();

			$('.big-img>img').width(xx);
			$('.big-img>img').height(yy);

			var size=$('.big-img>img').width()/$('.tb-booth>img').width();

			$('.big-img>img').css({left:-x*size,top:-y*size});
			$('.big-img>img').attr('src',$('.tb-booth-img').attr('src'));

	}).mouseout(function(){
		$('.detail-move,.big-img').hide();
	})
	$('.tb-thumb-content>ul>li>a>img').mouseover(function(){
		$('.tb-booth>img').attr('src',$(this).attr('src'));	
	})
	$('.tb-thumb-content ul li').live('mouseover',function(){
		var index=$(this).index();
		$('.tb-thumb-content-ul li').eq(index).addClass('tb-li').siblings('li').removeClass('tb-li');
	})
})
//切换
$(function(){
	$('.icon-icon').click(function(){
		$('.tb-meta-zi').toggle();
	})
})
//码数
$(function(){
	$('.tm-key1 span').click(function(){
		var index=$(this).index()-1;
		$('.tm-key1 span').eq(index).addClass('bod').siblings('span').removeClass('bod');
	})
})
//上下轮播
$(function(){
	var c=0;
	function run(){
		timer=setInterval(function(){
			c++
			if(c==4){
				$('.lun-1').css({'marginTop':'0px'});
				c=1
			}
			$('.lun-1').stop().animate({marginTop:-440*c+'px'},1000)
		},2000)
	}
	run();
	// $('.icon-jiantoushang').click(function(){
	// 	$('.lun-1').stop().animate({marginTop:-440*c+'px'},1000)
	// 	run()
	// })
	// $('.icon-jiantouxia').click(function(){
	// 	$('.lun-1').stop().animate({marginTop:+440*c+'px'},1000)
	// 	run()
	// })
})
//左右轮播
$(function(){
	var a=0;
	function rund(){
		timmer=setInterval(function(){
			a++
			if(a==5){
				$('.xiangxi-lun2').css({'marginLeft':'0px'});
				a=1
			}
			$('.xiangxi-lun2').stop().animate({marginLeft:-790*a+'px'},1000)
			$('.lun-dian ul li').eq(a).addClass('dian-li1').siblings('li').removeClass('dian-li1');
		},2000)
	}
	rund();
	$('.xiangxi-lun').mouseenter(function(){
		clearInterval(timmer);
			$('.lun-dian ul li').click(function(){
				var index=$(this).index();
				$('.xiangxi-lun2').stop().animate({marginLeft:-790*index-1+'px'},1000);
				$('.lun-dian ul li').eq(index).addClass('dian-li1').siblings('li').removeClass('dian-li1');
		})

	})
	$('.xiangxi-lun').mouseleave(function(){
		rund();	
	})

})
//瀑布
$(function(){
	function demo(){
		var images=[
			"detailsimages/c1.jpg",
            "detailsimages/c2.jpg",
            "detailsimages/c3.jpg",
            "detailsimages/c4.jpg",
            "detailsimages/c5.jpg",
            "detailsimages/c6.jpg",
            "detailsimages/c7.jpg",                 
            "detailsimages/c8.jpg",
            "detailsimages/c9.jpg",
		];
	
		for(var i=0; i<images.length; i++){
			var HTML=$('.c1').html()
			$('.c1').html(HTML+'<img src="'+images[i]+'">');

		}

	}
	$(window).scroll(function(){
		if(($(document).height()-$(document).scrollTop()-$(window).height())<2000 && $(document).height()<20000){
			demo();
		}
	})
		
})
// $(function(){
//             //用数组存放图片的文件名
//             var pictureSources = [
//                 "../detailsimages/c1.jpg",
//                 "../detailsimages/c2.jpg",
//                 "../detailsimages/c3.jpg",
//                 "../detailsimages/c4.jpg",
//                 "../detailsimages/c5.jpg",
//                 "../detailsimages/c6.jpg",
//                 "../detailsimages/c7.jpg",
//                 "../detailsimages/c8.jpg",
//                 "../detailsimages/c9.jpg",
//             ];
//             var base = "picture\/";


//             //item 元素的基本结构
//             var baseElem = $("<div class='c1'></div>").append("<img/>").append("<hr/>");


//             //实现瀑布流布局的函数
//             function waterfall(){
//                 var items = $("div.c1");//获取到所有的类名为item的元素
//                 var postop = [];//这个数组用来存放item定位的高度
//                 var itemWidth = items.eq(0).width()+10;//宽度都是一样的所有随便获取一个就行
//                 items.each(function(index,elem){
//                     var targetItemTop = items.eq(index).height()+10;//遍历所有item并获取高度
//                     if(index < 3){//如果是在第一行
//                         postop[index] = targetItemTop;//把高度直接加入数组中
//                         $(elem).css({
//                             "left":310*index,//设置left
//                             "top": 10//和top
//                         });
//                     }else{
//                         //其他行
//                         var mintop = Math.min.apply(null,postop);//获取数组中最小的一个
//                         var minindex = $.inArray(mintop,postop);//获取到数组最小值对应的排序
//                         $(elem).css({
//                             "top":mintop+10,//设置top为数组中最小值
//                             "left":parseInt(items.eq(minindex).css("left"))//设置left
//                         });
//                     }
//                     postop[minindex] += $(elem).height()+10;//更新数组
//                 });
//             }


//             //添加item的函数
//             function getItems(){
//                 for(var i = 0; i < pictureSources.length; i++){
//                     baseElem.clone().hide().children("img").attr("src",base+pictureSources[i]).bind("load",function(){
//                         waterfall();
//                         $(this).parent().fadeIn(500);

//                     }).end().appendTo("#picturewall");
//                 }
//             }


//             //判断文档滚动的位置
//             function wheelListen(){
//                 var srollHeight = $(document).scrollTop();
//                 if(srollHeight+$(window).height() >= $(document).height()-100){
//                     getItems();
//                 }
//             }


//             //绑定事件
//             $(window).on("load",function(){
//                 getItems();
//                 $(document).bind("mousewheel DOMMouseScroll",function(){
//                     wheelListen();
//                 });
//             })
//         });

