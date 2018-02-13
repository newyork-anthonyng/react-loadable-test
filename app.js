const express = require("express");
const app = express();
const path = require("path");
const indexRoute = require("./dist/indexRoute").default
const Loadable = require("react-loadable");

app.use(express.static(path.resolve(__dirname, "dist")));
app.use(indexRoute);

Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.log("Server listening on 3000");
  });
});
