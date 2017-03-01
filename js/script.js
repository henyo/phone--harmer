//ios
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
   //alert(navigator.userAgent); 
   
   //add a new meta node of viewport in head node
	head = document.getElementsByTagName('head');
	viewport = document.createElement('meta');
	viewport.name = 'viewport';
	viewport.content = 'target-densitydpi=device-dpi, width=' + 640 + 'px, user-scalable=no';
	head.length > 0 && head[head.length - 1].appendChild(viewport);    
   
}
//android
//if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
//  //alert(navigator.userAgent);  
//  window.location.href ="iPhone.html";
//} else if (/(Android)/i.test(navigator.userAgent)) {
//  //alert(navigator.userAgent); 
//  window.location.href ="Android.html";
//} else {
//  window.location.href ="pc.html";
//};

$(function(){
	
	
	//页面不足一屏，铺满一屏
	$('.layout').css('min-height',$(window).height());
	//锤子
	//锤子正在进行运动时，无法点击另一个锤子。
	$('.page-game .list li').click(function(){
		if($('body').hasClass('isAnimated')){
			alert('点击太快')
			return false;
		}
		
		if($(this).hasClass('selected')){
			alert('已经被敲掉了')
			return false;
		}
		$('body').addClass('isAnimated');

		if($('.page-game .list li.selected').size()>2){
			alert('不能再砸了');
			return false;
		}
		$(this).addClass('selected');
		//js延时
		setTimeout(function(){
			//弹窗出现
			var n = 3 - $('.page-game .list li.selected').size();
			$('#nums').html(n);
			//判断n的数值，来改变提示语
			if(n==0){
				$('.dialog .body').html('已经砸3个了，欢迎下次参加')
			}
			
			
			$('.dialog').addClass('on');
//			$('.mask').show();
			$('.mask').addClass('on');
			$('body').removeClass('isAnimated');
		},2000)
		
	})
		var funca = $('.dialog .foot a').click(function(){
		$('.dialog').removeClass('on');
//		$('.mask').hide();
		$('.mask').removeClass('on');
		return false;
	})
		
		//未生效的回车键关闭提示栏
		$('#enter').focus();
		$('#enter').focus(function(){
			$('.dialog .foot').css('background-color','red');
			$('#enter').bind('keydown',function(e){
				var key = e.which;
				if(key == 13){
					$('.dialog').removeClass('on');
			//		$('.mask').hide();
					$('.mask').removeClass('on');
					return false;
				}
			})
		})
	
})

