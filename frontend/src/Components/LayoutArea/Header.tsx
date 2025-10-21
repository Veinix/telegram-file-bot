import { AppBar, Toolbar, IconButton, Typography } from "@mui/material"
import AttachFileIcon from '@mui/icons-material/AttachFile';
function Header() {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <AttachFileIcon fontSize="medium"/>
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    Telegram File Bot
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header