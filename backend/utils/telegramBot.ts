import { appConfig } from "@/utils/appConfig";
import { jsonEditor } from "@/utils/jsonEditor";
import TelegramBot from "node-telegram-bot-api";
import path, { extname } from "path"

const TOKEN = appConfig.TELEGRAM_API_TOKEN
const url = `http://${appConfig.HOST}:${appConfig.PORT}`

if (!TOKEN) throw new Error("No Telegram API Token found")

const bot = new TelegramBot(TOKEN, { polling: true })

const uploadsDir = path.join(__dirname, '..', 'uploads');
bot.setWebHook(`${url}/bot${TOKEN}`)

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id
    const resp = match ? match[1] : "" // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

bot.onText(/היי/, (msg, match) => {
    const chatId = msg.chat.id
    const resp = "היי! מה שמך?"

    bot.sendMessage(chatId, resp)
})
bot.onText(/שמי (.+)/, (msg, match) => {
    const chatId = msg.chat.id

    const resp = match
        ? `נעים מאוד ${match[1]}! אני בוט הקבצים שלך! תוכל לשלוח לי תמונות או קבצים אחד-אחד`
        : `סורי, תוכל להגיד לי שוב מה שמך? תזכור לכתוב "שמי" לפמי!`

    bot.sendMessage(chatId, resp)
})

bot.onText(/^$/, (msg, match) => {
    const chatId = msg.chat.id
    const file = msg.document
    const resp = "Thanks! for the document"

    bot.sendMessage(chatId, resp)
})

bot.on("message", async (msg) => {
    const chatId = msg.chat.id

    if (msg.photo) {
        const fileID = msg.photo[0].file_id
        const senderName = msg.from?.first_name
        const filePath = await bot.downloadFile(fileID, uploadsDir)
        jsonEditor.addEntry(filePath, senderName)
        const resp = "Thanks for the photo!"
        bot.sendMessage(chatId, resp)
    }
    if (msg.document) {
        const fileID = msg.document.file_id
        const senderName = msg.from?.first_name
        const filePath = await bot.downloadFile(fileID, uploadsDir)
        jsonEditor.addEntry(filePath, senderName)
        const resp = "Thanks for the document!"
        bot.sendMessage(chatId, resp)
    }
})
export default bot