const path = require('path');
const { BrowserWindow, app, Menu } = require('electron');

module.exports = () => {
    const win = new BrowserWindow({
        minWidth:760,
        width: 680,
        minHeight:680,
        height: 680,
        // resizable:false,
        // frame: false,
        titleBarStyle: 'hidden',
        titleBarOverlay: {
          color: '#047ef2',
          symbolColor: 'white'
        },
        // icon:path.join(__dirname,'assets','logo.png'),// Path .join
        icon:'assets/logo.png',// Path .join
        show:false, // para nao piscar tela
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.once('ready-to-show', () => {
        win.show(); //nao pisca a tela
        const menuTemplate = [];
        const menu = Menu.buildFromTemplate(menuTemplate);
        Menu.setApplicationMenu(menu);
    })

    win.loadURL('http://localhost:3210');
}

