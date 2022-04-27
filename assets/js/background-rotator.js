var preloadFrames = function(pictureUrls, callback) {
    var i,
        j,
        loaded = 0;

    for (i = 0, j = pictureUrls.length; i < j; i++) {
        (function (img, src) {
            img.onload = function () {
                if (
                    ++loaded == pictureUrls.length &&
                    callback
                ) {
                    callback();
                }
            };
            img.src = src;
        } (new Image(), pictureUrls[i]));
    }
};
//TODO poprawić żeby się ładowało od razu, bo jak na razie ostatni obrazek w tablicy musi byc tym, który jest startowym w tle
$(document).ready(function() {
    var aImg = [
            'assets/images/carousel/test-bg.jpg',
            'assets/images/carousel/diversity.jpg',
            'assets/images/carousel/friends.png',
            'assets/images/carousel/europe.jpg',
            'assets/images/carousel/flag.jpg',
        ],
        oHeader = $('.simple-cta'),
        iFrameCount = aImg.length,
        iCurFrame = 0,
        iSpeed = 4000;

    preloadFrames(aImg, function(){

        var headerAnimation = setInterval(function() {
            if (iCurFrame >= iFrameCount) {
                iCurFrame = 0;
                //clearInterval(headerAnimation);
            }
            oHeader.css(
                'background-image', 'url(' + aImg[iCurFrame] + ')'
            );
            iCurFrame++;
        }, iSpeed);
    });
});
