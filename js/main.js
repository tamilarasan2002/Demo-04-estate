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

var navi=document.querySelector(".navi-visible");
console.log(navi);
function menuList(){
    let navi_none=navi.getAttribute("class");
    if(navi_none !="navi-none"){
        console.log(navi_none);        
        navi.setAttribute("class","navi-none");

    }
    else{
        console.log(navi_none);
        navi.setAttribute("class","navi-visible");

    
    }
    
}
function menuClose(){
    navi.setAttribute("class","navi-visible");

}