// ga
window.dataLayer = window.dataLayer || [];
function gtag() {dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-135017895-1');

// prevent transitions at load
// @see https://stackoverflow.com/a/42969608/2535504
window.addEventListener('load', () => {
  document.body.classList.remove('preload');
});
