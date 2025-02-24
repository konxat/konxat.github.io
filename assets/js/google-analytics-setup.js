window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
// gtag("js", new Date());
// gtag("config", "{{ site.google_analytics }}");

// Wait for page load to ensure gtag.js is ready
window.addEventListener("load", function() {
  gtag("js", new Date());
  gtag("config", "G-EG5JPV9PZL"); // In this file, the generic {{ site.google_analytics }} does not work and needs be replaced directly with the measurement ID. 
                                  // However, this file is not used in the current implementation, and the setup is done dirrectly in the scripts.liquid file, 
                                  // to maintain the genericness of the setup.
  gtag("event", "test_event", { "value": "debug" });
});
