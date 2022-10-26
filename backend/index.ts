import express from "express";
import cookieParser from "cookie-parser";
import { getActivityCards, getThumbnails } from "./controllers/other.controller";
import { partyRouter } from "./routes/party.route";
import { userRouter } from "./routes/user.route";
import cors from "cors";

const app = express();

const port = Number.parseInt(process.env.PORT ?? "3000");

const corsOptions: cors.CorsOptions = {
    origin: "*",
    allowedHeaders: "Origin, Content-Type, Accept",
    credentials: true,
};

app.use(cors(corsOptions));

declare module "cookie-parser" {
    interface cookies {
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
