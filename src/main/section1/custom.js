$(document).ready(function(){ 

    $(".grid").isotope({ 
        itemSelector: '.item',
        percentPosition: true,
        masonry: {      
          columnWidth: '.sizer'
        }
    });   

    /*
    $(".filter li a").on("click",function(e){
        e.preventDefault();
        var sort = $(this).attr("href");

        $grid.isotope({
            filter : sort
        });

        $(".filter li a").removeClass("on");
        $(this).addClass("on");
    });
    */

});
