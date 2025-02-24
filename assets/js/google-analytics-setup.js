window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
// gtag("js", new Date());
// gtag("config", "{{ site.google_analytics }}");

// Wait for gtag.js to load
if (typeof gtag === "function") {
  gtag("js", new Date());
  gtag("config", "{{ site.google_analytics }}");
} else {
  // Fallback: wait for gtag to be defined
  window.addEventListener("load", function() {
    gtag("js", new Date());
    gtag("config", "{{ site.google_analytics }}");
  });
}
