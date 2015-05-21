/*jslint browser: true*/
/*global define, module, exports*/
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.Progress = factory();
    }
}(this, function () {
    'use strict';
    var $w         = window,
        $d         = document,
        $circ      = document.querySelector('.animated-circle'),
        $progCount = document.querySelector('.progress-count'),
        init,
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

    function handler() {
        setSizes();
        trigger('scroll');
    }

    init = function () {
        var events = ['resize', 'load'], top, perc, i, len;

        setSizes();

        $w.addEventListener('scroll', function () {
            top  = this.pageYOffset || $d.documentElement.scrollTop;
            perc = Math.max(0, Math.min(1, top / sHeight));

            updateProgress(perc);
        }, false);

        for (i = 0, len = events.length; i < len; i += 1) {
            $w.addEventListener(events[i], handler, false);
        }
    };

    return {
        init : init
    };
}));