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
  <script src="your_link_integration.js"></script>
```

###

to insert a widget anywhere in the application, you need to pass an existing (which is already in the DOM) class, for example.App

example on React

```
function App() {
  const widget = window.widget;

  useEffect(() => {
    setTimeout(() => {
      widget.init(".App");
    }, 3000);
  }, []);

  return (
    <div className="App">
      This is the content of any website
    </div>
  );
}

```
