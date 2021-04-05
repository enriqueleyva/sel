const {app, BrowserWindow} = require('electron');

let win;

function createWindow(){
    win = new BrowserWindow({width : 1024, height : 768 });
    win.loadFile("index.html");
}

app.on("ready", createWindow);