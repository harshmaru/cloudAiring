// const electron = require('electron')
// // Module to control application life.
// const app = electron.app
// // Module to create native browser window.
// const BrowserWindow = electron.BrowserWindow
//const {clipboard} = require('electron')
const {app, Menu, Tray, BrowserWindow, clipboard, globalShortcut, ipcMain,console,dialog} = require('electron')
//var sleep = require('sleep');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
//et mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600, transparent: true, frame: true, darkTheme: true})

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.php`)

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}
function tempWin () {

  tray = new Tray('images/cloudair.png')
  globalShortcut.register('CommandOrControl+Shift+C',() => {
    //put code to do when you press ctrl+shift+C
    dialog.showMessageBox({
      type:'info',
      message:'success!',
      detail:clipboard.readText(),
      buttons:['OK']
    })

  })
  globalShortcut.register('CommandOrControl+Shift+P',() => {

    let win = new BrowserWindow(
      {
        width:400,
        height:200,
        frame: false,
        titleBarStyle: 'hidden-inset',
        resizable:false,
      })
      win.loadURL('file://'+__dirname +'/temp.html');
      var Positioner = require('electron-positioner')
      var positioner = new Positioner(win)
      positioner.move('bottomRight')
      win.on('closed',function(){
        win=null;
      });

  });
  const contextMenu = Menu.buildFromTemplate([
   {label: 'Demo', click: function(){clipboard.writeText('Demo From cloudair');}},
   {label: 'Login', click: function(){createWindow();}},
   {label: 'Exit', click: function(){process.exit(1);}}
 ])
 tray.setToolTip('CloudAiring')
 tray.setContextMenu(contextMenu)
 // createWindow();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', tempWin)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('will-quit', function () {
  globalShortcut.unregisterAll()
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
