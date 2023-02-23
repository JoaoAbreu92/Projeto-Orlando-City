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
    })
});