

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs'); // Use the promises API for fs

function createWindow() {

  console.log('Creating window');

  console.log(__dirname);  // Outputs the directory of the current file

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'), // Ensure this path is correct
      enableRemoteModule: false,
      nodeIntegration: false
    }

    
  });

  mainWindow.loadFile('index.html'); // Ensure index.html is in the correct directory
  //mainWindow.loadURL('http://localhost:8080'); // URL served by http-server
  console.log('Window created and URL loaded');
}

console.log('Main.js waitinng app ready');

app.whenReady().then(() => {
  createWindow();

  ipcMain.handle('fileExists', (event, filename) => {
    return fs.existsSync(filename);
  });
  
  ipcMain.handle('createFile', (event, filename, content) => {
    fs.writeFileSync(filename, content);
  });
  
  app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
          createWindow();
      }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
      app.quit();
  }
});