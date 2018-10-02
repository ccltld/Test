// 登录切换

$(function(){
		$('.text .icon-code').click(function(){
		$('.text2').css('display','block');
	});
		$('.text2 .icon-Computer').click(function(){
		$('.text2').css('display','none');
	})
})

// 清除
$(function(){
	$('.field-input').keyup(function(){
		if($('.field-input').val()!=''){
			$('.clear').css('display','block')
		}else{
			$('.clear').css('display','none')
		}
	})
	$('.field-input').blur(function(){
		if($('.field-input').val()==''){
			$('.clear').css('display','none')
		}else{
			$('.clear').css('display','block')
		}
	})
	$('.clear').click(function(){
		$('.field-input').val('');
	})
	$('.clear').click(function(){
		if($('.field-input').val()==''){
			$('.clear').css('display','none')
		}
		$(this).css('display','none')
	})
})

$(function(){
	$('.button').eq(0).click(function(){
		// e.stopPropagation();
		$.ajax({
			url:'php/login.php',
			type:'post',
			data:$('.form').serialize(),
			async:true,
			success:function(msg){
				console.log(msg);
			}
		})
	})

})