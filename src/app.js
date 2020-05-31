/**
 * google analytics
 */

var gid = 'UA-135017895-1';

var gscript = document.createElement('script');
gscript.async = true;
gscript.src = 'https://www.googletagmanager.com/gtag/js?id=' + gid;
document.body.appendChild(gscript);

window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', gid);

/**
 * lazy load images
 */
document.querySelectorAll('img')
    .forEach(function (image) {
        if (!image.complete) {
            image.addEventListener('load', function () {
                image.classList.add('lazy--loaded');
            });
            image.classList.add('lazy');
        }
    });

/**
 * prevent transitions at load
 * @see https://stackoverflow.com/a/42969608/2535504
 */

window.addEventListener('load', function () {
    document.body.classList.remove('preload');
});
