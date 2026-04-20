import express from "express";

const app = express();
const port = 3000;

app.get("/health", (req, res) => {
    res.send("It's alive!");
});

app.listen(port, () => {
    console.log('Inicializando API REST com express...');
});
