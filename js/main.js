
$(document).ready(function(){
$(window).scroll(function() {
   if($(window).scrollTop()>=550) {
     $('.nav_nav').fadeIn(550);
     $('.logo').css({'width':'50','transition':' margin-left , ease-in-out ,0.3s'});
     $('.burger').css({'width':'50','transition':' margin-left , ease-in-out ,0.3s'});
   } else {
     $('.nav_nav').fadeOut(550);
     $('.logo').css({'width':'60','transition':' margin-left , ease-in-out ,0.3s'});
     $('.burger').css({'width':'60','transition':' margin-left , ease-in-out ,0.3s'});
   }



  if ($(window).scrollTop()>=100){
    	$('.header').css({'background-color': '4A4006'});
	    	 if ($(window).scrollTop()>=200){
	    	  $('.header').css({'background-color': '#635608'});
	 
			  	if ($(window).scrollTop()>=300){
				    	$('.header').css({'background-color': '#756509'});

				    		if ($(window).scrollTop()>=400){
					    	$('.header').css({'background-color': '#87740B'});

						    		if ($(window).scrollTop()>=500){
						    	$('.header').css({'background-color': '#A18A0D'});
						   		}
						   			else {
							      $('.header').css({'background-color': '#87740B'});
							   	}
				   		}
				   			else {
					      $('.header').css({'background-color': '#756509'});
					   	}
			   		}
			   			else {
				      $('.header').css({'background-color': '#635608'});
				   	}
	   		}
	   			else {
		      $('.header').css({'background-color': '#4A4006'});
		   	}
}

	else {
	      $('.header').css({'background-color': '#181818'});

	   	}





});

   $('.logo').hover(function(){
   	 $( '.logo' ).css( "width", "70" )
   	 						// .after( "width", "50" )


   });


});

