var SectionScroller = function (navigationSelector) {
    // Elements
    this.navigationWrappper = document.querySelector(navigationSelector);
    if (!this.navigationWrappper) {
        return false;
    }
    this.$body = $('html, body');
    this.$triggers = $('.js-hitstop-trigger');
    this.navigation = this.navigationWrappper.querySelectorAll('a');

    // Methods
    this.bindEvents();
};
SectionScroller.prototype.bindEvents = function() {
    [].forEach.call(this.navigation, function (a) {
        a.addEventListener('click', this.selectAndScrollTo.bind(this));
        a.addEventListener('touch', this.selectAndScrollTo.bind(this));
    }.bind(this));
    
    this.$triggers.hitsTop(function (hasHitTheTop, $element) {
        var sectionID = $element.attr('id');
        this.setClasses('#'+sectionID);
    }.bind(this));
};
SectionScroller.prototype.selectAndScrollTo = function(event) {
    event.preventDefault();
    var sectionID = event.currentTarget.getAttribute('href');
    this.animate(sectionID, function () {
        this.setClasses(sectionID);
    }.bind(this));
};
SectionScroller.prototype.setClasses = function(sectionID) {
    var prevCurrent = this.navigationWrappper.querySelector('.current');
    if (prevCurrent) {
        prevCurrent.classList.remove('current');
    }

    this.navigationWrappper.querySelector('a[href="'+sectionID+'"]')
        .parentElement
        .classList
        .add('current');
};
SectionScroller.prototype.animate = function (sectionID, callback) {
    var section = document.querySelector(sectionID);
    var topOffset = $(section).offset().top;

    var settings = section.getAttribute('data-sectionscroller-settings');
    var distanceFromTop;
    if (settings) {
        settings = JSON.parse(settings);
        distanceFromTop = topOffset - parseFloat(settings.distanceFromTop.default);
        if (settings.distanceFromTop.mq) {
            for (var mediaQuery in settings.distanceFromTop.mq) {
                if (window.matchMedia(mediaQuery).matches) {
                    distanceFromTop = topOffset - parseFloat(settings.distanceFromTop.mq[mediaQuery]);
                }
            }
        }
    } else {
        distanceFromTop = topOffset;
    }

    this.$body.animate({
        scrollTop: distanceFromTop
    }, callback);
};