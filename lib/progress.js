/*jslint browser: true*/
/*global define, module, exports*/
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return factory(root);
        });
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        root.Progress = factory(root);
    }
})(this, function () {
    'use strict';
    var $w         = window,
        $d         = document,
        $circ      = document.querySelector('.animated-circle'),
        $progCount = document.querySelector('.progress-count'),
        wh,
        h,
        sHeight;

    function trigger(eventName) {
        var event = $d.createEvent('HTMLEvents');
        event.initEvent(eventName, true, false);

        $w.dispatchEvent(event);
    }

    function updateProgress(perc) {
        var circle_offset = 126 * perc;

        $circ.style.strokeDashoffset = 126 - circle_offset;

        $progCount.innerHTML = (Math.round(perc * 100) + "%");
    }

    function setSizes() {
        wh = $w.innerHeight;
        h  = $d.body.offsetHeight;

        sHeight = h - wh;
    }

    var init = function () {
        setSizes();

        $w.addEventListener('scroll', function () {
            var top  = $w.pageYOffset || $d.documentElement.scrollTop,
                perc = Math.max(0, Math.min(1, top / sHeight));

            updateProgress(perc);
        }, false);

        $w.addEventListener('resize', function () {
            setSizes();
            trigger('scroll');
        }, false);
    };

    return {
        init : init
    };
});