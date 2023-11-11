jQuery(document).ready(function($) {
    
    jQuery(".demo-single .inner-box .thumb").each(function(i, el) {
        if (jQuery(this).hasClass("img-auto-height")) {
            //jQuery(this).css("height", jQuery(this).find('img').height());
        }
        jQuery(el)
        .on('mouseover', function() {
            var height = jQuery(el).find('img').height() - jQuery(el).height();
            jQuery(this).find('img').css(  { '-webkit-transform' : 'translateY(-' + height + 'px)', 'transform' : 'translateY(-' + height + 'px)' } );
        })
        .on('mouseout', function() {
            jQuery(this).find('img').css(  { '-webkit-transform' : 'translateY(0px)', 'transform' : 'translateY(0px)' } );
        });
    });
});
