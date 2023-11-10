import remix from "@remix-run/express";
import express from "express";

const app: express.Application = express();

app.all(
  "*",
  remix.createRequestHandler({ build: require("./build") })
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});