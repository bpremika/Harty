import express from "express";
import { createParty } from "./controllers/party.controller";
import sessions from "express-session";
import cookieParser from "cookie-parser";
import {
  getActivityCards,
  getThumbnails,
} from "./controllers/other.controller";
import { partyRouter } from "./routes/party.route";
import { userRouter } from "./routes/user.route";
import cors from "cors";

const app = express();

const port = Number.parseInt(process.env.PORT ?? "3000");
const oneDay = 1000 * 60 * 60 * 24;

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(
  sessions({
    secret: "secrctekeykokdev",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);
declare module "express-session" {
  interface Session {
    token: string;
  }
}
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.get("/activities", getActivityCards);
app.get("/thumbnail", getThumbnails);

app.use("/", userRouter);
app.use("/party", partyRouter);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
