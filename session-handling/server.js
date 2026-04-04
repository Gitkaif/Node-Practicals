const express = require("express");
const session = require("express-session");
const path  = require('path')

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "super secret key",
    resave: false,
    saveUninitialized: false,
  }),
);

const user = {
  email: "kaif@gmail.com",
  password: "kaif123",
};

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.post("/login", (req, res) => {
    console.log(req.body);
  const { email, password } = req.body;
  if (email === user.email && password === user.password) {
    req.session.user = { email };
    return res.redirect("/dashboard");
  }
  res.send("invalid credentials");
});



app.get('/dashboard', (req, res) => {
    if(!req.session.user){
        return res.redirect('/login')
    }
    return res.sendFile(path.join(__dirname, "public", "dashboard.html"))
})


app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});


app.listen(3000, () => {
  console.log("server started");
});
