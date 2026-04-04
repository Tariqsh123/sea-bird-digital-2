function partnerSliderTransition() {
    var e = $(".elementor-widget-partners"),
        n = 7;
    e.length && e.data("count") && (n = e.data("count")),
        $(".partner-slider")
            .owlCarousel({
                margin: 28,
                loop: true,
                dots: true,
                autoplay: !1,
                autoplayHoverPause: true,
                items: 7,
                slideBy: 1,
                responsiveClass: !0,
                responsive: { 0: { items: 2, slideBy: 2 }, 768: { items: 3, slideBy: 3 }, 1e3: { items: 3, slideBy: 3 }, 1200: { items: n } },
            })
            .on("dragged.owl.carousel", function (e) {});

}

function awardsSlider() {
    $('#awards-carousel').owlCarousel({
        loop:true,
        margin:15,
        responsiveClass:true,
        dots: true,
        items: 1,
        nav:false,
        slideBy: 1,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            540:{
                items:2,
                nav:false
            }
        }
    });
}

function heroSlider() {
    $('#hero-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 10000,
        fade: true,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 768, 
              settings: {
                fade: false, 
              },
            },
        ],
    });    
}


var $ = jQuery.noConflict(),
    w = $(window).width();
function careerPageFilterScript() {
    $(document).ready(function () {
        $("#location-filter").val("3f8c269"),
            $("#location-filter").on("change", function () {
                $(".location-result-card").hide(), $("#" + this.value).show();
            });
    });
}
function preventScrollfix() {
    $.event.special.touchstart = {
        setup: function (e, n, t) {
            this.addEventListener("touchstart", t, { passive: !0 });
        },
    };
}
function resizeIntro() {
    $(".custom-intro").each(function (e, n) {
        var t = this.children[1].clientHeight;
        $(n).css("min-height", t + "px");
    });
}
function canUseWebP() {
    var e = document.createElement("canvas");
    return !!(e.getContext && e.getContext("2d")) && 0 === e.toDataURL("image/webp").indexOf("data:image/webp");
}
function scrollHideOnSlide() {
    $("#hero-banner").on("changed.owl.carousel", function (e) {
        e.item.index + 1 === e.item.count
            ? setTimeout(function () {
                  $("body").removeClass("overflow-hidden");
              }, 1e3)
            : 0 !== $(window).scrollTop() || $("body").hasClass("elementor-editor-active") || $("body").addClass("overflow-hidden");
    });
}
function searchLength() {
    $(".search-input").keydown(function () {});
}
function searchToggle() {
    $(".search-input").val(""), $(".search-form").fadeToggle(), $(".search-input").focus();
}
function stickyHeader() {
    var e = window.pageYOffset;
    $(window).scroll(function () {
        var n = $("#header"),
            t = $(window).scrollTop(),
            a = window.pageYOffset;
        t >= 50 ? n.fadeIn("slow").addClass("header-shadow") : n.fadeIn("slow").removeClass("header-shadow"), w < 993 && (e >= a ? n.removeClass("header-slide") : t > 65 && n.addClass("header-slide"), (e = a));
    });
}
function addLinkAttributes() {
     $("#menu-footer-menu a").attr("target", "_top"), $(".tp__fieldset-col .elementor-button-link").attr("target", "_top");
}
function hideShowContent() {
    $(".expandable-button").click(function () {
        $(this).parent().find(".expandable-wrapper .content").slideToggle();
    }),
        $(".expandable-button").on("click", function () {
            $(this).hasClass("show-more") ? ($(this).removeClass("show-more"), $(this).addClass("show-less")) : ($(this).removeClass("show-less"), $(this).addClass("show-more"));
        });
}
function subMenuAdjust() {
    workMenu(), serviceMenu(), platformsMenu(), companyMenu(), careersMenu();
}
function submenuArrows() {
    767 > $(window).width() &&
        $(".sub-menu-wrap").each(function (e) {
            $(this).find("a").first().attr("data-href", $(this).find("a").attr("href")), $(this).find("a").first().removeAttr("href");
        }),
        $(".sub-menu-wrap").each(function () {
            var e = $(this).children("a").text() + "-menu",
                n = $(this).children("a").attr("data-href");
            $("." + (e = e.toLowerCase())).append("<i data-title=" + $(this).children("a").text() + ' onClick="openSubMenu(this)" id=' + e + "-arrow></i>"),
                $("#" + e + "-arrow").addClass("d-md-none icon-angel-right"),
                $(this)
                    .children("ul")
                    .prepend(
                        '<div class="d-flex align-items-center d-sm-block d-md-none p-nav"><i onClick="closeSubMenu()" class="icon-angel-left"></i><a href="' +
                            n +
                            '"><span class="mb-0 ml-3 p-nav-title">' +
                            $(this).children("a").text() +
                            "</span></a></div>"
                    );
        });
}
function openSubMenu(e) {
    $(e.parentElement.children[1]).css("display", "flex");
}
function closeSubMenu() {
    $(".sub-menu-wrap").children("ul").hide();
}
function workMenu() {
    var e, n;
    $(".work-menu").children().length && ((e = $(".work-menu").children("ul.sub-menu")), (n = $(".work-menu").children("a").position()), e.css("padding-left", n.left - $(".services-menu").width() - 135 + "px"));
}
function serviceMenu() {
    var e, n;
    $(".services-menu").children().length && ((e = $(".services-menu").children("ul.sub-menu")), (n = $(".services-menu").children("a").position()), e.css("padding-left", n.left - 380 + "px"));
}
function platformsMenu() {
    var e, n;
    $(".platforms-menu").children().length && ((e = $(".platforms-menu").children("ul.sub-menu")), (n = $(".services-menu").children("a").position()), e.css("padding-left", n.left - 240 + "px"));
}
function companyMenu() {
    var e, n;
    $(".company-menu").children().length && ((e = $(".company-menu").children("ul.sub-menu")), (n = $(".company-menu").children("a").position()), e.css("padding-left", n.left - 190 + "px"));
}
function careersMenu() {
    var e, n;
    $(".careers-menu").children().length && ((e = $(".careers-menu").children("ul.sub-menu")), (n = $(".careers-menu").children("a").position()), e.css("padding-left", n.left + "px"));
}
function videopaddingIssue() {
    $(".totalbusiness-fluid-video-wrapper").parent().attr("style", "padding: 0 !important");
}

function scrollToHash(e) {
    $(e).length && $("html, body").animate({ scrollTop: $(e).offset().top }, 1e3);
}
function appendNationalJobLocation() {
    $(".national-jobs").length &&
        $(".national-jobs").each(function (e, n) {
            $("#" + n.id + " a").each(function () {
                var e = $(this).attr("href") + "?location=" + n.dataset.title;
                $(this).attr("href", e);
            });
        });
    var e = new URLSearchParams(window.location.search).get("location");
    if ($("#job-location").length && null !== e) {
        var n = $("#job-location").text().replace("Karachi", e);
        $("#job-location").text(n);
    }
}

// Yellow Sticky Menu Offset - Added Dec 2024
function calculateYellowMenuOffset(anchorBar) {
    if (w > 990) {
        var stickyOffset = anchorBar.offset().top - 76;
    } else {
        var stickyOffset = anchorBar.offset().top - 65;
    }
    return stickyOffset;
}
function calculateYellowMenuOffsetRes(anchorBar, initialStickyOffset) {
    if (w > 990) {
        if ($(window).scrollTop() > initialStickyOffset) {
            var stickyOffset = anchorBar.closest('.home-anchor-bar-wrapper').offset().top - 128;
        } else{
            var stickyOffset = anchorBar.closest('.home-anchor-bar-wrapper').offset().top - 76;
        }
    } else {
        if ($(window).scrollTop() > initialStickyOffset) {
            var stickyOffset = anchorBar.closest('.home-anchor-bar-wrapper').offset().top - 103;
        } else{
            var stickyOffset = anchorBar.closest('.home-anchor-bar-wrapper').offset().top - 65;
        }
    }
    return stickyOffset;
}


$(document).ready(function () {
    subMenuAdjust(),
        preventScrollfix(),
        submenuArrows(),
        stickyHeader(),
        hideShowContent(),
        addLinkAttributes(),
        partnerSliderTransition(),
        //featureditemsSlider(),
        setInterval(() => {
            videopaddingIssue();
        }, 500),
        w < 993 &&
            $(".navbar-toggler").click(function () {
                $("body").removeClass("body-scroll-disabled"), $("#navbarSupportedContent").hasClass("show") || $("body").addClass("body-scroll-disabled");
            }),
        $(".navbar-nav > .sub-menu-wrap > a").attr("onClick", "openSubMenu(this)"),
        resizeIntro(),
        $(window).resize(function () {
            subMenuAdjust(), resizeIntro();
        }),
        $(".sub-menu-wrap").mouseenter(function () {
            $(this).hasClass("services-menu") && serviceMenu(), $(this).hasClass("platforms-menu") && platformsMenu(), $(this).hasClass("work-menu") && workMenu(), $(this).hasClass("company-menu") && companyMenu();
        }),
        $(".expand-case-studies").click(function () {
            $(".accordion-list").toggleClass("accordion-expand");
        }),
        $("#menu-main-menu a").click(function () {
            var e = $(this).attr("href");
            scrollToHash((e = e.substring(e.indexOf("#"))));
        }),
        $("#menu-item-66456 a").removeAttr("rel");

        setTimeout(() => {
            $('#fcItems').owlCarousel({
                    loop:true,
                    margin:15,
                    responsiveClass:true,
                    dots: true,
                    items: 4,
                    slideBy: 1,
                    touchDrag : true,
                    autoplay : true,
			        autoplayTimeout : 8000,
			        autoplayHoverPause : true,
                    responsive:{
                        0:{
                            items:1,
                            nav:false
                        },
                        540:{
                            items:2,
                            nav:false
                        },
                        768:{
                            items:3,
                            nav:false
                        },
                        1024:{
                            items:4,
                            nav:true                
                        }
                    }
                });
        }, 1000); 

        if ($("#awards-carousel").length) {
            awardsSlider();
        }
        heroSlider();



}),
    $(window).on("load", function () {
        var e = window.location.hash;
        setTimeout(function () {
            scrollToHash(e);
        }, 500);
    }),
    $(".equalizer-container").each(function () {
        var e = 0;
        $(".equalize", this).each(function () {
            $(this).height() > e && (e = $(this).height());
        }),
            $(".equalize", this).height(e);
    });
var anchors = document.querySelectorAll("article.category-video a.elementor-post__read-more");
anchors.forEach(function (e) {
    e.textContent = "Watch video";
});

// Homepage Sticky Menu - Added May 2024
$(document).ready(function() {
    var anchorBar = $('#homeAnchorBar');
    var initialStickyOffset = calculateYellowMenuOffset(anchorBar);
    var stickyOffset = calculateYellowMenuOffset(anchorBar);
    $(window).on('resize', function() {
        stickyOffset = calculateYellowMenuOffsetRes(anchorBar, initialStickyOffset);
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > stickyOffset) {
            anchorBar.addClass('sticky');
            $('body').addClass('sticky');
        } else {
            anchorBar.removeClass('sticky');
            $('body').removeClass('sticky');
        }
    });

    $('#homeAnchorMenu li a, #homeAnchorMenuMobile a').click(function() {
        var target = $(this).data('target');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 80
        }, 1000); 
    });


    $('#haToggle').click(function(event) {
        event.stopPropagation();
        $(this).toggleClass('active');
        $('#homeAnchorMenuMobile').toggle();
    });

    $(document).click(function() {
        $('#homeAnchorMenuMobile').hide();
        $('#haToggle').removeClass('active');
    });
});

//map-tickers
$(window).on('load', function() {
    $(function(){
        var scroller = $('.map-scroller div.map-scroller-inner');
        var scrollerContent = scroller.children("ul");
        scrollerContent.children().clone().appendTo(scrollerContent);
        var curX = 0;
        scrollerContent.children().each(function(){
            var scrollElement = $(this);
            scrollElement.css('left', curX);
            scrollElement.css('opacity', '1');
            curX += scrollElement.outerWidth(true);
        });
        var fullW = curX / 2;
        var viewportW = scroller.width();

        // Scrolling speed management
        var controller = {curSpeed:0, fullSpeed:2};
        var $controller = $(controller);
        var tweenToNewSpeed = function(newSpeed, duration)
        {
            if (duration === undefined)
                duration = 600;
            $controller.stop(true).animate({curSpeed:newSpeed}, duration);
        };

        // Scrolling management; start the automatical scrolling
        var doScroll = function()
        {
            var curX = scroller.scrollLeft();
            var newX = curX + controller.curSpeed;
            if (newX > fullW*2 - viewportW)
                newX -= fullW;
            scroller.scrollLeft(newX);
        };
        setInterval(doScroll, 40);
        tweenToNewSpeed(controller.fullSpeed);
    });
});


// Vertical text scroller
(function() {
    var Flip;
  
    Flip = class Flip {
      constructor(el) {
        this.el = el;
        this.el = $(this.el);
        this.currentStep = 0;
        
        $('.next').on('click', $.proxy(this.next, this));
      }  
      next(event) {
        var currentStepEl, nextStepEl, nextStepNum;
        if (event) {
          event.preventDefault();
        }
        nextStepNum = this.currentStep + 1;
        currentStepEl = this.el.find(`.step${this.currentStep}`);
        nextStepEl = this.el.find(`.step${nextStepNum}`);
        if (nextStepEl.length) {
         
          currentStepEl.prev().removeClass('down');
          currentStepEl.removeClass('set');
          currentStepEl.addClass('down');
          nextStepEl.addClass('set');
          nextStepEl.removeClass('down');
          nextStepEl.next().removeClass('down');
          return this.currentStep++;
        } else {
          // reset to 0
          this.el.find(".step").removeClass('set');
          this.el.find(`.step${this.currentStep}`).addClass('down');
          this.el.find(".step").not(`.step${this.currentStep}`).removeClass('down');
          this.currentStep = -1;
          return this.next();
        }
      }
  
    };
  
    $(function() {
      var f;
      f = new Flip(document.getElementById('flipper'));
      return setInterval((function() {
        return f.next();
      }), 2000);
    });
  
  }).call(this);


