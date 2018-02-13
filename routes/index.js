import express from "express";
const router = express.Router();
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";
import Loadable from "react-loadable";
import { getBundles } from "react-loadable/webpack";
import stats from "../dist/react-loadable.json";

router.get("*", (req, res) => {
  let modules = [];

  const html = ReactDOMServer.renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <App />
    </Loadable.Capture>
  );

  let bundles = getBundles(stats, modules);

  res.send(`
    <!doctype html>
    <html>
      <body>
        <div id="app">${html}</div>
        <script type="text/javascript" src="manifest.js"></script>
        ${
          bundles
            .map(bundle => `<script type="text/javascript" src="${bundle.file}"></script>`)
            .join("\n")
        }
        <script type="text/javascript" src="bundle.js"></script>
      </body>
    </html>
  `);
});

export default router;
