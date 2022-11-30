$('.home-container').owlCarousel({
    center: true,
    items:3,
    loop:true,
   	autoplay:true,
    responsive:{
		0:{
            items:1
        },
		
    }
});
$('.property-row').owlCarousel({
    center: true,
    items:4,
    loop:true,
	margin:20,
   	autoplay:true,
    responsive:{
		0:{
            items:1
        },
		600:{
            items:1
        },
		1000:{
            items:3
        },
		
    }
});
$('.latest-row').owlCarousel({
    center: true,
    items:4,
    loop:true,
	margin:20,
   	autoplay:true,
    responsive:{
		0:{
            items:1
        },
		600:{
            items:1
        },
		1000:{
            items:3
        },
		
		
    }
});
$('.testimonial-row').owlCarousel({
    center: true,
    items:4,
    loop:true,
	margin:20,
   	autoplay:true,
    responsive:{
		0:{
            items:1
        },
	
		
    }
});

