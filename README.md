# Progress

Page Scroll Reading Progress Indicator.

# How to install

You can download the lib:

* [development version](lib/progress.js)
* [minified version](build/progress.min.js)

Please, this lib doesn't have CDN yet, so you need to download and put it in your own site.

# How to use

### Loading the lib

Download the file **progress.min.js** and put this lib in your own site, using the tag _&lt;script&gt;_:

```html
<html>
    <head></head>
    <body>
        <!-- The HTML of progress indicator -->
        <div class="progress-indicator">
            <svg>
                <g>
                    <circle cx="0" cy="0" r="20" stroke="black" class="animated-circle" transform="translate(50,50) rotate(-90)"  />
                </g>
                <g>
                    <circle cx="0" cy="0" r="38" transform="translate(50,50) rotate(-90)"  />
                </g>
            </svg>
            <div class="progress-count"></div>
        </div>
        <!-- Loading and initialize the progress lib -->
        <script src="/path/to/progress.min.js"></script>
        <script>Progress.init();</script>
    </body>
</html>
```

Or using an AMD loader:

```js
require(['/path/to/progress.min'], function(Progress) {
    Progress.init()
});
```

### CSS Rules for the indicator

```css
.progress-indicator {
    position: fixed;
    top: 10px;
    right: 20px;
    width: 100px;
    height: 100px;
    z-index: 20;
}
.progress-count {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 100px;
    color: #0082FF;
}

svg {
    position: absolute;
}

circle {
    fill: rgba(255,255,255,0.9);
}

svg .animated-circle {
    fill: transparent;
    stroke-width: 40px;
    stroke: #0A74DA;
    stroke-dasharray: 126;
    stroke-dashoffset: 126;
}
```

# Compatibility

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png)
--- | --- | --- | --- | --- |
IE 9+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

# License

MIT License: http://opensource.org/licenses/MIT
