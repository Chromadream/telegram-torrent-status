import Express from "express";

let app = Express();
app.get("/status", (_, res): void => {
  res.send({ date: new Date() });
});
app.listen(3000);
