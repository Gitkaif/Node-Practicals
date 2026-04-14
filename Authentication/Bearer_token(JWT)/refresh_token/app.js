const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const secret_key = "kaifkey";

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "kaif" && password === "123") {
    const accesstoken = jwt.sign({ username }, secret_key, {
      expiresIn: "1m",
    });
    const refreshtoken = jwt.sign({ username }, secret_key, {
      expiresIn: "7d",
    });

    return res.json({ accesstoken, refreshtoken });
  }

  return res.status(400).json({ message: "invalid credentials..." });
});



app.post("/refresh", (req, res) => {
  const { refreshtoken } = req.body;
  if (!refreshtoken) {
    return res.status(400).json({ message: "refresh token required..." });
  }
  try {
    const decoded = jwt.verify(refreshtoken, secret_key);
    const newaccesstoken = jwt.sign(
      { username: decoded.username },
      secret_key,
      { expiresIn: "1m" },
    );
    res.json({ accesstoken: newaccesstoken });
  } catch (error) {
    return res.status(403).json({ message: error });
  }
});

const jwtmiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(400).json({ message: "token required..." });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decode = jwt.verify(token, secret_key);
    req.user = decode;
    next();
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/admin", jwtmiddleware, (req, res) => {
  res.send("admin page");
});

app.listen(3000, () => {
  console.log("server started...");
});
