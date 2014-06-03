jQuery(document).ready(function(){
    jQuery('a.afgcolorbox').colorbox({
        slideshow: true,
        slideshowAuto: false,
        slideshowSpeed: 3500,
        maxWidth: "90%",
        maxHeight: "90%",
        current: "{current} of {total}",
        title: function(){ return jQuery(this).find('img').attr('alt');}
    });
});
