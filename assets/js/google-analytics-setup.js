window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
// gtag("js", new Date());
// gtag("config", "{{ site.google_analytics }}");

// Wait for page load to ensure gtag.js is ready
window.addEventListener("load", function() {
  gtag("js", new Date());
  gtag("config", "G-EG5JPV9PZL");
  gtag("event", "test_event", { "value": "debug" });
});
