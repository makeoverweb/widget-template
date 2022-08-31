## Template for creating a widget on React

### To use the widget you need to do

1. `npm ci`
2. `npm run build`
3. place the entire deploy folder on a remote server
4. in the deploy/integration.js specify paths to chunk.main.js and chunk.main.css
5. take a link to deploy/integration.js
6. in any other application, connect in .html file using

```
<div id="widget-root"></div>
 <script>
   const widgetScript = document.createElement("script");
   widgetScript.type = "text/javascript";
   const env = "your_link_integration.js";
   widgetScript.src = env;
   document.body.appendChild(widgetScript);
 </script>
```
