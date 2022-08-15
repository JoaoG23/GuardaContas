const { app } = require('electron'); 
const createWindow = require('./src/services/createWindow'); 
const isMac = process.platform === 'darwin' ? true: false;

app.whenReady().then(() => {
    createWindow();
    // console.info('app rodadndo')
})

app.on('window-all-closed', () => {
    console.log('Todas janela fechada');

    if (isMac) {
        app.quit();
    }
})

app.on('activate', () => { // verifica se tem alguma janela aberta 
    if (BrowserWindo.getAllWindows().length === 0) {
        createWindow(); 
    }
})