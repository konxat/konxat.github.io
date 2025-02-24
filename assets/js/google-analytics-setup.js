window.dataLayer = window.dataLayer || [];
window.addEventListener("load", function() {
  function gtag() {
    window.dataLayer.push(arguments);
  }
// gtag("js", new Date());
// gtag("config", "{{ site.google_analytics }}");

  gtag("js", new Date());
  gtag("config", "{{ site.google_analytics }}"); 
  gtag("event", "test_event", { "value": "debug" });
});
