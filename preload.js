// preload.js
console.log('Preload script loaded');

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  fileExists: (filename) => ipcRenderer.invoke('fileExists', filename),
  createFile: (filename, content) => ipcRenderer.invoke('createFile', filename, content)
});

// window.addEventListener('DOMContentLoaded', () => {
//     const replaceText = (selector, text) => {
//       const element = document.getElementById(selector);
//       if (element) element.innerText = text;
//     };
  
//     for (const dependency of ['chrome', 'node', 'electron']) {
//       replaceText(`${dependency}-version`, process.versions[dependency]);
//     }
//   });
  
