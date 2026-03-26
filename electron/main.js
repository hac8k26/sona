const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 800,
        minWidth: 900,
        minHeight: 600,
        title: 'SONA',
        backgroundColor: '#fcfaf2',
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            // allow media autoplay (needed for audio)
            autoplayPolicy: 'no-user-gesture-required'
        },
        // frameless titlebar to match the minimal aesthetic
        titleBarStyle: 'hiddenInset',
        icon: path.join(__dirname, '..', 'assets', 'icon.png')
    });

    // load the local index.html
    win.loadFile(path.join(__dirname, '..', 'index.html'));

    // open external links in the system browser, not a new electron window
    win.webContents.setWindowOpenHandler(({ url }) => {
        if (url.startsWith('http')) shell.openExternal(url);
        return { action: 'deny' };
    });

    // remove default menu bar
    win.setMenuBarVisibility(false);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => app.quit());
