function widgetIntegration() {
  var styleElement0 = document.createElement('link');
  styleElement0.setAttribute('rel', 'stylesheet');
  styleElement0.setAttribute('type', 'text/css');
  styleElement0.setAttribute(
    'href',
    'http://localhost:8000/widget-template/deploy/static/css/main.ef81384a.css',
  );
  document.head.insertBefore(styleElement0, document.head.firstChild);
  var script0 = document.createElement('script');
  script0.type = 'text/javascript';
  script0.src =
    'http://localhost:8000/widget-template/deploy/static/js/main.68e4cf80.js';

  window.widget = {
    init: (wrapper) => {
      const test = document.querySelector(wrapper);
      test.appendChild(script0);
    },
    config: (options) => {
      const root = document.getElementById('widget-root');
      root.setAttribute('config', JSON.stringify(options));
    },
  };
}
widgetIntegration();
