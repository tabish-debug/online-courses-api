import express, { Application } from 'express';
import { config } from "dotenv";
import { DBConnect } from './connect';
import courseRouter from "./routers/course.router";
import lessonRouter from "./routers/lesson.router";
import chapterRouter from "./routers/chapter.router";
import pageRouter from "./routers/page.router";
import componentRouter from "./routers/component.router";

const app: Application = express();
config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

app.use("/api", courseRouter);
app.use("/api", lessonRouter);
app.use("/api", chapterRouter);
app.use("/api", pageRouter);
app.use("/api", componentRouter);

app.listen(port, async () => {
    await DBConnect(process.env.DB || "");
    console.log(`application server is started on ${port}`);
});
