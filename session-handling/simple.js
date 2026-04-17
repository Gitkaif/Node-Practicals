const express = require("express");
const session = require("express-session");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "kaifkey",
    resave: false,
    saveUninitialized: false,
  }),
);

app.get("/", (req, res) => {
  res.send(`
        <h2>HOME PAGE</h2>
        <a href="/login">LOGIN</a>
        <a href="/dashboard">DASHBOARD</a>
        <a href="/logout">LOGOUT</a>
        `);
});

app.get("/login", (req, res) => {
  res.send(`
        <h1>LOGIN</h1>
        <form method="POST" action="/login">
        Name<input type="text" name="name"><br>
        Pass<input type="text" name="pass"><br>
        <button type="submit"> login</button>
        </form>

        `);
});

app.post("/login", (req, res) => {
  const { name, pass } = req.body;
  if (name === "kaif" && pass === "123") {
    req.session.user = { name };
    return res.send(`
            <h1>login successfull</h1>
            <a href="/dashboard"> go to dashboard</a>
            `);
  }
  return res.send("invalid credentials");
});

app.get("/dashboard", (req, res) => {
  if (!req.session.user) {
    return res.send("Unauthorized");
  }
  res.send(`
        <h1>DASHBOARD</h1>
        <h3>welcome ${req.session.user.name}</h3>
        <a href="/logout">logout</a>
        `);
});

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.send(`
            <h3>Logged out!!!</h3>
            <a href="/login">login again</a>
            `);
  });
});

app.listen(3000, () => {
  console.log("server started");
});

