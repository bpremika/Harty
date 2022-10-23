import express from "express";
import { createParty } from "./controllers/party.controller";
import sessions from "express-session"
import cookieParser from "cookie-parser"
import { getActivityCards } from "./controllers/other.controller";

const app = express();

const port = Number.parseInt(process.env.PORT ?? "3000");
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "secrctekeykokdev",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.json());

app.get("/activities",getActivityCards);
app.post("/",createParty);


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
})