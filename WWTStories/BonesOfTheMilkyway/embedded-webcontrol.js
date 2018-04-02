var wwt = (function () {
    var api = {
        importImage: function (imgUrl) {
            iframe.contentWindow.postMessage('import::' + imgUrl, hostUrl);
        }
    };

    var hostUrl,
        div,
        containerWidth,
        aspect,
        iframe,
        fullscreen = false;

    var init = function() {
        hostUrl = 'http://worldwidetelescope.org';
        div = document.querySelector('div#wwtControl');
        containerWidth = div.offsetWidth;
        aspect = .6667;
        var options = {
            hostWindow: 'http://' + location.hostname
        };
        if (div.getAttribute('data-wwt-tour-location')) {
            options.tour = div.getAttribute('data-wwt-tour-location');
        } else if (div.getAttribute('data-wwt-galactic-mode')) {
            options.galacticMode = div.getAttribute('data-wwt-galactic-mode');
        } else if (div.getAttribute('data-wwt-import-image')) {
            options.importImage = div.getAttribute('data-wwt-import-image');
        } else if (div.getAttribute('data-tour-location')) {
            options.tour = div.getAttribute('data-tour-location');
        } else if (div.getAttribute('data-galactic-mode')) {
            options.galacticMode = div.getAttribute('data-galactic-mode');
        } else if (div.getAttribute('data-import-image')) {
            options.importImage = div.getAttribute('data-import-image');
        }
        if (div.getAttribute('data-wwt-settings')) {
            options.settings = div.getAttribute('data-wwt-settings');
        } else if (div.getAttribute('data-settings')) {
            options.settings = div.getAttribute('data-settings');
        }
        if (div.getAttribute('data-wtml')) {
            options.wtml = div.getAttribute('data-wtml');
        } 
        if (div.getAttribute('data-wwt-aspect-ratio')) {
            aspect = parseFloat(div.getAttribute('data-wwt-aspect-ratio'));
        } else if (div.getAttribute('data-aspect-ratio')) {
            aspect = parseFloat(div.getAttribute('data-aspect-ratio'));
        }
        div.style.position = 'relative';
        var fsButton = document.createElement('a');
        fsButton.setAttribute('style', 'position:absolute;bottom:0;right:0;height:33px;width:40px;display:block;background:rgba(234,234,234,.01)');
        fsButton.onmouseenter = function() {
            iframe.contentWindow.postMessage('fsenter', hostUrl);
        };
        fsButton.onmouseleave = function() {
            iframe.contentWindow.postMessage('fsleave', hostUrl);
        };
        fsButton.onclick = fullScreenMode;

        div.appendChild(fsButton);
        iframe = document.createElement('iframe');
        iframe.setAttribute('src', hostUrl + '/WebControl.aspx?v=5.0.14#' + JSON.stringify(options));
        iframe.setAttribute('style', 'border:none;background-color:transparent;');
        iframe.setAttribute('frameborder', 'no');
        iframe.setAttribute('scrolling', 'no');
        iframe.style.height = "500px";//(containerWidth * aspect) + 'px';
        iframe.style.width = "680px";
        iframe.style.top = "-5px";
        iframe.style.left = "0px";
        div.appendChild(iframe);
        
    };
    

    var requestFullScreen = function (element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } 
    };

    var exitFullScreen = function () {
        var previousFullScreen = document.fullScreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
        if (previousFullScreen) {

            if (previousFullScreen.cancelFullScreen) {
                previousFullScreen.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } 
    };

    var fullScreenMode = function () {
        if (!fullscreen) {
            requestFullScreen(document.body);
            div.style.width = '100%';
            div.style.height = '100%';
            iframe.style.height = '100%';
            iframe.style.width = '100%';
            div.style.position = 'fixed';
            div.style.top = 0;
            div.style.left = 0;
            fullscreen = true;
            
        } else {
            exitFullScreen(document.body);
            div.style.width = containerWidth;
            div.style.height = (containerWidth * aspect) + 'px';
            iframe.style.height = (containerWidth * aspect) + 'px';
            iframe.style.width = containerWidth + 'px';
            div.style.position = 'relative';
            fullscreen = false;
        }
    };

    init();

    return api;
})();