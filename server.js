require("dotenv").config();
const { getChar, setStat } = require("./db/queries/queries");
const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

// Sample GET route
App.get("/api/data", (req, res) =>
  res.json({
    message: "Seems to work!",
  })
);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});

App.get("/character", async (req, res) => {
  const char = await getChar(1);
  res.json(char);
});

App.put("/character", async (req, res) => {
  console.log(req.body);
  await setStat(req.body.stat, req.body.value, req.body.id);
});
