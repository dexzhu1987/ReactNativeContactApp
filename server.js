const express = require("express");
const bodyParse = require("body-parser");

const PORT = process.env.PORT || 8000;
const users = {
  username: "password"
};

const app = express();
app.use(bodyParse.json());

app.post("*", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send("Missing username and password");
  }

  if (!users[username]) {
    return res.status(403).send("User does not exist");
  }

  if (users[username] !== password) {
    return res.status(403).send("Incorrect password");
  }

  return res.status(200).send();
});
// Catch 404
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) =>
  res.status(err.status || 500).send(err.message || "There was a problem")
);

const server = app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
