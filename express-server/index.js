import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
})

app.get("/about", (req, res) => {
    res.send("<h2>my name is carolina bolnykh</h2>");
    res.send("<h2>I am a computer science student at nc state university</h2>");
})

app.get("/contact", (req, res) => {
    res.send("<h2>contact me at cbolnyk@ncsu.edu</h2>");
})
app.listen(port, () => {
    console.log("server running on port 3000.");
});