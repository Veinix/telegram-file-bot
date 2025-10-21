# telegram-file-bot

Telegram File Bot (TFB) is a system that allows uploading files via the Telegram Bot API, and being able to view, and download them in a web browser.

A user can say "Hi!" to the bot, and the bot will say "Hi! What's your name?"

The user can say their name, and the bot will say "Hi ```${name}```, nice to meet you! I am your file bot. You can send me pictures or files one by one"

From this point on, any file sent to the bot will be saved on the server.

The bot will also know basic information of all the files, including:

* Filename
* File type
* Name of the sender 
* Upload date
* Path to file on disk

The database is a simple JSON file. There is one endpoint ```/files``` that returns a JSON with the file metadata. The files and documents are saved in a local folder ```uploads/```

The frontend is a React App that displays the files from the server in a grid view. Each grid item will present a preview of the file. Pictures will be shown as a thumbnail. PDFs will be shown as a direct preview as an iframe or a PDF display component. Clicking on a file will let the user view it or download it. It will have a simple UI, that is clean, oragnized, and nice to look at.

## Quickstart

Firstly, clone the repository 

```bash
git clone https://github.com/Veinix/telegram-file-bot.git
```

Then to start the frontend we will navigate to the correct directory, install the required packages, and run the ```npm run start``` command

```bash
cd frontend
npm i
npm run start
```

If everything has installed correctly, you should see something like this:

```bash
 VITE v7.1.11  ready in 420 ms

  ➜  Local:   http://localhost:{PORT}/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Once we have the frontend going, navigate to the backend, and just like the front we will install and run

```bash
cd ../backend
npm i
npm run start
```

A succesfull start will log this to the console:

```bash
Server running on port http://localhost:{PORT}
```


## Further Ideas

### Added Chat Functionality

More complex chat abilities to the bot such as "remembering" chat history, being able to respond to questions

Adding a "help" or "guide" to the chat itself, explaning the different abilities the user can take

Adding language detection, options, etc. (i18n)

### Cloud Storage / Users

Adding user functionality allowing the user to login and be able to see their images, and download them from wherever

### Security / Content Monitoring

It would be a good idea to prevent users from uploading files that are too large, not "typical" documents or images (e.g. exe, bash, ini) that may prove harmful

### WebSockets (Live updates)

When a user uploads an image via the bot on Telegram, a better UX would be to have the page update in real-time using Websockets 


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