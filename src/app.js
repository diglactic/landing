/**
 * google analytics
 */

const gid = 'UA-135017895-1';

const gscript = document.createElement('script');
gscript.async = true;
gscript.src = 'https://www.googletagmanager.com/gtag/js?id=' + gid;
document.body.appendChild(gscript);

window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date);
gtag('config', gid);

/**
 * lazy load images
 */
document.querySelectorAll('img')
    .forEach((image) => {
        if (!image.complete) {
            image.addEventListener('load', () => {
                image.classList.add('lazy--loaded');
            });
            image.classList.add('lazy');
        }
    });

/**
 * prevent transitions at load
 * @see https://stackoverflow.com/a/42969608/2535504
 */

window.addEventListener('load', () => {
    document.body.classList.remove('preload');
});

/**
 * smooth-scroll anchor hash
 */
document.querySelectorAll('a')
    .forEach((anchor) => {
        const {pathname, origin} = window.location;

        if (anchor.hash !== ''
            && anchor.pathname === pathname
            && anchor.origin === origin
        ) {
            anchor.addEventListener('click', (event) => {
                document.querySelector(anchor.hash)
                    .scrollIntoView({behavior: 'smooth'});
                event.preventDefault();
            });
        }
    });
