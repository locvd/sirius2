Template.widgets.onRendered(function(){

    // Google Maps
    $('[data-gmap]').each(initGmap);

    // Sparkline
    $('[data-sparkline]').each(initSparkLine);

})
