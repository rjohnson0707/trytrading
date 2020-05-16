import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/pages/App/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/lux/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body>
        <App />
      </body>
    </html>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
