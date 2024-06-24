import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mainRouter from "./routes/index.js";

dotenv.config();
const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:5173"],
  credentials: true,
};
morgan.token("referrer", function (req, res) {
  return req.headers.referer || "-";
});

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors(corsOptions));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms - referrer: :referrer"
  )
);
app.use(helmet());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());


app.use('/', mainRouter)

app.listen(process.env.PORT, () => {
  console.log(`Listening On Port: ${process.env.PORT}`);
});
