// JavaScript Document
$( document ).ready(function() {
	
	setTimeout(function(){$('#intro').addClass('step-1');},200);
	setTimeout(function(){$('#intro-circle').addClass('bang');},750);
	setTimeout(function(){
		$('#intro').addClass('step-2');
		setTimeout(function(){
			$('#intro').remove();
			$('#top-form').addClass('active');
		},1000);
	},1250);
	homepageVideoPositioning();
	setOrganizedSection();
	if($("#footer")){
		$( "#footer" ).load("footer.html");
	}
	if($("#main-navigation")){
		$("#main-navigation").load("main-navigation.html");
	}
	setTimeout(function(){
		var navi = $('#navigation-scrolled').html();
		$('#navigation-scrolled').remove();
		$('html').append('<div id="navigation-scrolled">'+navi+'</div>');
		$('a.fader').click(function(event){
			var linker = $(this).attr("href");
			event.preventDefault();
			$('#body-transition').removeClass('transition-in');
			setTimeout(function(){
				location.replace(linker);
			},250);
		});
	},100);
 	//Header Scroller
	if($('.hero')){
		var scroll_pos = 0;
		$(document).scroll(function() { 
			scroll_pos = $(this).scrollTop();
			halfHeight = ($('.hero').outerHeight()/2);
			if(scroll_pos > halfHeight && !$("#navigation-scrolled").hasClass('active')) {
				$("#navigation-scrolled").addClass('active');
				console.log('adding class active')
			} else if(scroll_pos < halfHeight && $("#navigation-scrolled").hasClass('active')) {
				console.log('removing class active')
				$("#navigation-scrolled").removeClass('active');
			}
		});
	}
	//Homepage Video Positioning
SVGInjector(document.querySelectorAll('img.svg'));	
});

$(window).resize(function(){
   homepageVideoPositioning();
});

function homepageVideoPositioning(){
	var videoHeight =  $('#home-header-video').outerHeight();
	var halfVideoHeight = videoHeight/2;
	var videoTextHeight = $('#home-header-text');
	var halfVideoTextHeight = videoTextHeight/2;
	$('#home-header-text').css('top',halfVideoHeight).css('margin-top',-videoTextHeight);
	
	if($(document).outerWidth() < 640){
		$('#home-header-video').hide();
	}
	else{
		$('#home-header-video').show();
	}
}

function setUnsubscribeSection(){
	var screenshotSize = $('#unsubscribe-screen-1').outerWidth()/1.25;
	var screenshotMargin = screenshotSize/2;
	$('#unsubscribe-screen-2,#unsubscribe-screen-3').css('width',screenshotSize).css('margin-left',-screenshotMargin).addClass('fadeInUp');
	setTimeout(function(){
		$('#unsubscribe-section').addClass('step-2');
		setTimeout(function(){
			$('#unsubscribe-section').addClass('step-3');
			setTimeout(function(){
				$('#unsubscribe-screen-1').attr('src','assets/img/unsubscribe-screen-animation.gif');
			},1000);
		},500);
	},500);
}


function setFeedbackSection(){
	$('#feedback-1').addClass('active');
	setTimeout(function(){
		$('#feedback-2').addClass('active');
	},500);
}

function setSearchSection(){
	searchAnimationComplete = true;
		$('#search-bar').append('M');
		setTimeout(function(){
			$('#search-bar').append('i');
			setTimeout(function(){
				$('#search-bar').append('k');
				setTimeout(function(){
					$('#search-bar').append('a');
					setTimeout(function(){
						$('#search-bar').append('e');
						setTimeout(function(){
							$('#search-bar').append('l');
						},100);
					},100);
				},100);
			},100);
		},100);
		
		setTimeout(function(){
			$('#search-contact-1').addClass('active');
			setTimeout(function(){
				$('#search-email-1').addClass('active');
				setTimeout(function(){
					$('#search-email-2').addClass('active');
				},250);
			},250);
		},750);
}

function setOrganizedSection(){
	$('.organization-card-container').hide();
	$('.organization-card-fader').hide();
	$('#travel-cards').show();
	$('#travel-card-container').fadeIn();
	
	$('#organized-travel').hover(function(){
		$('.organization-card-container').hide();
		$('#travel-cards').show();
		$('#travel-card-container').fadeIn();
	});
	$('#organized-packages').hover(function(){
		$('.organization-card-container').hide();
		$('.organization-card-fader').hide();
		$('#packages-cards').show();
		$('#packages-card-container').fadeIn();
	});
	$('#organized-billsreceipts').hover(function(){
		$('.organization-card-container').hide();
		$('.organization-card-fader').hide();
		$('#billsreceipts-cards').show();
		$('#billsreceipts-card-container').fadeIn();
	});
	$('#organized-entertainment').hover(function(){
		$('.organization-card-container').hide();
		$('.organization-card-fader').hide();
		$('#entertainment-cards').show();
		$('#entertainment-card-container').fadeIn();
	});
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-27772284-5', 'auto');
ga('send', 'pageview');

var trackOutboundLink = function(url) {
    ga('send', 'event', 'outbound', 'click', url, {
		'transport': 'beacon',
	 	'hitCallback': function(){document.location = url;}
	});
}

$(document).ready(function(){
        //var counter = $('#TextBox').val();
        $('#tally-button').click( function() {
            var counter = $('#tally-vote').val();
            counter++ ;
            $('#tally-vote').val(counter);
    });
});