//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var pass = "";
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, () => {});

function authenticate(req, res, next) {
    console.log(req);
    pass = req.body["password"];
    if(pass == "ILoveProgramming"){
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
    }
    next();
}


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req, res) => {
    // console.log(req.body);
    app.use(authenticate);
})