import { Card, CardActionArea, CardContent, Typography, CardActions, CardMedia, Link } from "@mui/material"
import type { UploadedFile } from "../../App"


function FileCard({ filePath, fileName, senderName, uploadDate }: UploadedFile) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => { open(filePath, '_blank'); }}>
                <CardMedia
                    component="img"
                    height="140"
                    src={filePath}
                    alt=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {fileName}
                    </Typography>
                    {senderName &&
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Uploaded by {senderName}
                        </Typography>
                    }
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Uploaded on {uploadDate}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link href={filePath} download underline="hover">Download</Link>
            </CardActions>
        </Card>
    )
}

export default FileCard