import { useEffect, useState } from "react"
import FileCard from "./Components/FileGridArea/FileCard"
import Header from "./Components/LayoutArea/Header"
import MainContent from "./Components/LayoutArea/MainContent"
import axios from "axios"

export type UploadedFile = {
    fileName: string,
    fileType: string,
    filePath: string,
    senderName?: string,
    uploadDate: string,
}

function App() {

    const [files, setFiles] = useState<UploadedFile[]>([])

    const getFileList = async () => {
        try {
            const res = await axios.get("http://localhost:5001/files")
            return res.data
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const files = async () => {
            const data = await getFileList()
            setFiles(data)
        }
        files()

    }, [])
    return (
        <>
            <Header />
            <MainContent>
                <div className="p-10 flex gap-5 flex-wrap">
                    {files.map((element) => <FileCard
                        key={element.fileName + element.filePath}
                        fileName={element.fileName}
                        filePath={element.filePath}
                        fileType={element.fileType}
                        senderName={element.senderName}
                        uploadDate={element.uploadDate}
                    />)}
                </div>
            </MainContent>
        </>
    )
}

export default App
