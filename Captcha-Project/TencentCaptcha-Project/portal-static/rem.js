;
(function () {
    function is_mobile() {
        var reg = /phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i;
        return reg.test(navigator.userAgent.toLowerCase());
    }

    function addStyleNode(str) {
        var styleNode = document.createElement("style");
        styleNode.type = "text/css";
        styleNode.innerHTML = str;
        document.getElementsByTagName("head")[0].appendChild(styleNode);
        return styleNode;
    }
    /**
     * css元素尺寸=设计稿元素尺寸/100;
     */
    var psw = 1440; //设计稿尺寸
    var change = 'orientationchange' in window ? 'orientationchange' : 'resize';

    function calculate() {
        var deviceWidth = document.documentElement.clientWidth;
        if (deviceWidth < 320) {
            deviceWidth = 320;
        }
        if (!is_mobile()) {
            if (deviceWidth >= psw) {
                deviceWidth = psw;
            }
        };
        document.documentElement.style.fontSize = deviceWidth / psw * 100 + 'px';
    };

    function addEvent(elm, evType, fn) {
        if (elm.addEventListener) {
            elm.addEventListener(evType, fn, false); //DOM2.0
        } else if (elm.attachEvent) {
            elm.attachEvent('on' + evType, fn); //IE
        } else {
            elm['on' + evType] = fn; //DOM 0
        }
    }
    addEvent(window,change,calculate)
    // window.addEventListener(change, calculate, false);

    calculate();
    //  if(!is_mobile()){
    //      addStyleNode("#wrapper{max-width:"+psw+"px}");
    //  };
})();