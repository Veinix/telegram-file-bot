import { appConfig } from "@/utils/appConfig"
import { readFile, writeFile } from "fs/promises"
import path, { basename, extname } from "path"

 
const jsonFilePath = path.join(__dirname, "..", "database", "jsondb.json")
export const jsonEditor = {
    addEntry: async (filePath: string, senderName?: string) => {
        const read = await readFile(jsonFilePath, { encoding: "utf-8" })
        const json = JSON.parse(read)
        const fileType = extname(filePath).slice(1)
        const fileName = basename(filePath, extname(filePath))
        const toInsert = {

            "fileName": fileName,
            "fileType": fileType,
            "senderName": senderName ?? "",
            "uploadDate": new Date(),
            "filePath": `http://localhost:${appConfig.PORT}/${basename(filePath)}`

        }
        json.push(toInsert)
        await writeFile(jsonFilePath, JSON.stringify(json))
    }
}