const { app, BrowserWindow, Menu} = require('electron/main')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 700,
    resizable: false,       // Prevent resizing
    fullscreenable: false,  // Prevent fullscreen
    maximizable: false,     // Prevent maximize button

    titleBarStyle: 'hidden',
    ...(process.platform !== 'darwin' ? { titleBarOverlay: true } : {})
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

Menu.setApplicationMenu(false)

