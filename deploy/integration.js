function widgetIntegration() {
  var styleElement0 = document.createElement('link');
  styleElement0.setAttribute('rel', 'stylesheet');
  styleElement0.setAttribute('type', 'text/css');
  styleElement0.setAttribute('href', 'your_link.css');
  document.head.insertBefore(styleElement0, document.head.firstChild);
  var script0 = document.createElement('script');
  script0.type = 'text/javascript';
  script0.src = 'your_link.js';
  document.body.appendChild(script0);
}
widgetIntegration();
