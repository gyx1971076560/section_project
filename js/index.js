//$(document).scroll(function(){
//	var curr = $(document).scrollTop();
//	
//	var prev ;
//	 if(curr>prev){
//	 	console.log(1);
//	 }else{
//	 	console.log(2);
//	 }
//     prev=curr; 
       
//      console.log($(".SeeTitle").offset().top);
//      if(top >= $(".header_box_tit_center").offset().top){
//          $(".header_lllll").css({"z-index":"100","width":"100%","position":"fixed","top":"0","left":"0","background":"#000"});
//         
//      }
//      if(top >= $(".shoppingTit").offset().top){
//          $(".firstRemain a").css({"background-position": "0 0","color":"#8f8f8f"});
//          $(".thirdRemain a").css({"background-position": "0 -186px","color":"#8f8f8f"});
//          $(".sectionRemain a").css({"background-position": "-176px -124px","color":"#fff"});
//          
//      }
//      if(top >= $(".BeautyTit").offset().top){
//          $(".firstRemain a").css({"background-position": "0 0","color":"#8f8f8f"});
//          $(".sectionRemain a").css({"background-position": "0 -124px","color":"#8f8f8f"});
//          $(".thirdRemain a").css({"background-position": "-176px -186px","color":"#fff"});
//          
//      }
//      if(top<$(".SeeTitle").offset().top){
//      	$(".allLeft").css({"display":"none"});
//      }
//});
  
	var h1 = 0;
	var h2 = 75;
	var lls=1000;
	var ss = $(document).scrollTop();
	$(window).scroll(function(){
		var s = $(document).scrollTop();

		if(s<= h1){
			$('.header_box_bigs').removeClass('yya');
		}if(s > h1){
			$('.header_box_bigs').addClass('yya');
		}if(s > h2){
			$('.header_box_bigs').addClass('gizle');
			if(s > ss){
				$('.header_box_bigs').removeClass('sabit');
			}else{
				$('.header_box_bigs').addClass('sabit');
			}
			ss = s;
		}
			var llls=$(".firstbox_text").offset().top;
			var lllss=$(".section_3_box").offset().top;
		if(s>=300){
			$(".header_botttom_last").animate({"top":"-92"},1000);
		}else if(s>=1000){$(".header_botttom_last").animate({"top":"0"},1000);}
		if(s>=800){
			$(".section_1_tit").animate({"top":"0","opacity":"1"},1000);
		}else if(s>=1200){$(".section_3_box").animate({"left":"-80","opacity":".1"},1000);}
		if(s>=llls){
			$(".section_3_box").animate({"left":"0","opacity":"1"},1000);
		}else if(s>=1500||s<llls){$(".section_5_img").animate({"left":"-80","opacity":".1"},1000);}
		if(s>=lllss){
			$(".section_5_img").animate({"left":"0","opacity":"1"},1000);
		}
		
	});
	$(function(){
		$(".header_botttom_last").animate({"top":"-92"},1000);
	});
	
	$(".ssss").mouseenter(function(){
		$(".li_csl_u").slideDown();
		$(this).stop();
	});
	$(".ssss").mouseleave(function(){
		$(".li_csl_u").slideUp();
	});
	//有bug
	
//
