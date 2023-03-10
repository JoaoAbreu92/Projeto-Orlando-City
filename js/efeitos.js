$(document).ready(function () {

    $("#input-search").on("focus", function () {

        $("li.search").addClass("ativo");

    }).on("blur", function () {

        $("li.search").removeClass("ativo");
    });

    $(".bnews").owlCarousel({
        loop: true,
        margin: 2,
        nav: true,
        navText: ["Anterior", "Próximo"],
        responsive: {
            0: {
                item: 1
            },
            720: {
                item: 3
            },
            1000: {
                item: 4
            },

        }
    });

    var owl = $(".bnews").data('owlCarousel');

    $('#btn-news-prev').on("click", function () {

        owl.prev();
    })

    $('#btn-news-next').on("click", function () {

        owl.next();
    });


    $('#page-up').on("click", function (event) {

        $("body").animate({
            scroll: 0
        }, 1000);

        event.preventDefault();

    });


    $("#btn-bars").on("click", function () {

        $("header").toggleClass("open-menu");

    });

    $("#menu-mobile-mask, .btn-close").on("click", function () {

        $("header").removeClass("open-menu");

    })

    $("#btn-search").on("Click",function(){

        $("header").toggleClass("open-search");
    $("#input-search-mobile").focus();

    })


});