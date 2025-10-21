# telegram-file-bot

Telegram File Bot (TFB) is a system that allows uploading files via the Telegram Bot API, and being able to view, and download them in a web browser.

Examples:

A user can say "Hi!" to the bot, and the bot will say "Hi! What's your name?"

The user can say their name, and the bot will say "Hi ```${name}```, nice to meet you! I am your file bot. You can send me pictures or files one by one"

From this point on, any file sent to the bot will be saved on the server.

The bot will also know basic information of all the files, including:

* Filename
* File type
* Name of the sender 
* Upload date
* Path to file on disk

The database is a simple JSON file. There is one endpoint ```/files``` that returns a JSON with the file metadata. The files and documents are saved in a local folder (```uploads/```)

The frontend is a React App that displays the files from the server in a grid view. Each grid item will present a preview of the file. Pictures will be shown as a thumbnail. PDFs will be shown as a direct preview as an iframe or a PDF display component. Clicking on a file will let the user view it or download it. It will have a simple UI, that is clean, oragnized, and nice to look at.

## Further Ideas

TBD

## Stack

### Frontend
* React/Vite
* Typescript 
* Axios
* reactjs-file-preview
* TailwindCSS
* MaterialUI

### Backend
* Node/Express
* node-telegram-bot-api
* @types/node-telegram-bot-api package

## Database
* JSON File