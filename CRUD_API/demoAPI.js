const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;

let users = [
    { id: 1, name: "tom" },
    { id: 2, name: "jeery" },
    { id: 3, name: "bob" },
    { id: 4, name: "peter" },
]
app.get('/users', (req, res) => {
    res.json(users)
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json({ message: "new user added!", user: newUser });

})

app.delete('/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    users = users.filter((u) => u.id !== userId);
    res.status(201).json({ message: "user deletd..." });
})

app.put('/users/:id', (req, res) => {
    const userId = Number(req.params.id);  //getting id from url....using Number because it comes as a string so is we did (u.id==userId) it fails because (2 !-"2")
    const updatedUser = req.body;  // storing data sent from postman body
    let userFound = false;
    users = users.map((u) => {
        if (u.id === userId) {
            userFound = true;
            return { ...u, ...updatedUser };
        }
        return u;
    })
    if (!userFound) {
        return res.status(404).json({ message: "user not found" })
    }
    res.status(200).json({ message: "user updated..." });
})


app.listen(PORT, () => {
    console.log('Server is running...');

})







