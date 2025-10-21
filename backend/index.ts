import { appConfig } from "@/utils/appConfig";
import bot from "@/utils/telegramBot";
import express, { type Express } from "express"
import cors from "cors"
import path from "path"

const app: Express = express();

app.use(express.json());
app.use(cors())
app.use(express.static("uploads"))

app.get('/files', async (req, res, next) => {
    const dbDir = path.join(__dirname, "database")
    res.sendFile(path.join(dbDir, "jsondb.json"));
})

app.get("/", (req, res, next) => {
    return res.status(200).json({ "message": "Hello World" })
})
app.post(`/bot${appConfig.TELEGRAM_API_TOKEN}`, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
});

app.listen(appConfig.PORT, () => {
    const { PORT } = appConfig;
    console.log(`Server running on port http://localhost:${PORT}`);
});
