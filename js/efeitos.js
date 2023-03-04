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

    /* script carousel de imagens  */
    
    var owl = $(".bnews").data('owlCarousel');

    $('#btn-news-prev').on("click", function () {

        owl.prev();
    })

    $('#btn-news-next').on("click", function () {

        owl.next();
    });

    /* Script voltar para o menu */

    $(document).ready(function () {
        $('#page-up').on("click", function (event) {

            $("body").animate({
                scroll: 0
            }, 1000);

            event.preventDefault();

        });
    });

});