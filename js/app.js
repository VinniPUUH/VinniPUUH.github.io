$(function () {

    /* Filter 
    ================================ */

    let $filter = $("[data-filter]");

    $filter.on("click", function (event) {
        event.preventDefault();

        let $filterCat = $(this).data('filter');

        $("[data-cat]").each(function () {
            let $cat = $(this).data('cat');

            if ($filterCat == "all") {
                $(this).show();
                return;
            }

            if ($filterCat == $cat) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });


    /* Modals
    ========================================= */

    let $btnOpen = $("[data-modal]");
    let $btnClose = $("[data-close]");

    $btnOpen.on("click", function (event) {
        event.preventDefault();

        let modalId = $(this).data('modal');

        $(modalId).addClass("show");
        $("body").addClass("no-scroll");

        setTimeout(function () {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            })
        }, 150)

        $('[data-slider="workSlider"]').slick('setPosition');
    });

    $btnClose.on("click", function (event) {
        event.preventDefault();

        let $modal = $(this).closest(".modal");

        $modal.find(".modal__dialog").css({
            transform: "scale(0)"
        })

        setTimeout(function () {
            $modal.removeClass("show");
            $("body").removeClass("no-scroll");
        }, 200)
    });

    $(".modal__dialog").on("click", function (event) {
        event.stopPropagation();
    });

    $(".modal").on("click", function () {
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        })

        setTimeout(function () {
            $this.removeClass("show");
            $("body").removeClass("no-scroll");
        }, 200)
    });


    /* Slider:  https://github.com/kenwheeler/slick 
    ====================================================*/


    $('[data-slider="workSlider"]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: true,
        arrows: false,
        speed: 500
    });


    $('.slickPrev').on("click", function (event) {
        event.preventDefault();

        let $currentSlider = $(this).parents(".modal").find('[data-slider="workSlider"]');
        $currentSlider.slick("slickPrev");
    })

    $('.slickNext').on("click", function (event) {
        event.preventDefault();

        let $currentSlider = $(this).parents(".modal").find('[data-slider="workSlider"]');
        $currentSlider.slick("slickNext");
    })


    /* Mobile Nav 
    ===================================================== */

    let $navToggle = $("#navToggle");
    let $nav = $("#nav");

    $navToggle.on("click", function (event) {
        event.preventDefault();

        $nav.toggleClass("show");
    })


    /* Scroll
    ================================================ */

    let $nav__link = $(".nav__link");
    let $footer__link = $(".footer__nav--link");

    function Scroll(event) {
        event.preventDefault();

        let id = $(event.target.closest("a")).attr('href');
        let top = $(id).offset().top;
        $('body, html').animate({ scrollTop: top }, 800);
    }

    $nav__link.on("click", Scroll);
    $footer__link.on("click", Scroll);



    /* Skills__slider 
    ===============================================================*/

    let $next = $('.skills__slider__right');
    let $prev = $('.skills__slider__left');
    let $mover = $('.skills__slider__move')
    let $item = $('.skills__item');
    let $images = document.querySelectorAll(".skills__logo");
    let counter = 0;

    function changeImg() {
        for (let image of $images) {
            if (image.getAttribute('data-number') == +counter) {
                image.classList.remove("hover");
            } else {
                image.classList.add("hover");
            }
        }
    }

    $next.on("click", function () {
        if (counter >= $item.length - 1) return;
        counter++;
        $mover.css({
            transform: "translateX(" + `${-400 * counter}` + "px)"
        });
        changeImg();
    })

    $prev.on("click", function () {
        if (counter == 0) return;
        counter--;
        $mover.css({
            transform: "translateX(" + `${-400 * counter}` + "px)"
        });
        changeImg();
    })

});