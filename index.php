<!DOCTYPE html>
<html>
  <head>
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize.css"  media="screen,projection"/>
    <link type="text/css" rel="stylesheet" href="css/style.css"  media="screen,projection"/>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Welcome to AirCloud!</title>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <h1 class="blue-text text-darken-2">Welcome to AirCloud</h1>
      </div>
    </div>
  </body>

  <script>
    // You can also require other files to run in this process
    require('./renderer.js')
    onload = () => {
      const {ipcRenderer} = require('electron')
      console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

      ipcRenderer.on('asynchronous-reply', (event, arg) => {
        console.log(arg) // prints "pong"
      })
      ipcRenderer.send('asynchronous-message', 'ping')
    }
  </script>

  <script type="text/javascript" src="js/materialize.js"></script>
  <script type="text/javascript" src="js/jquery-3.1.1.js"></script>
  <script type="text/javascript" src="js/script.js"></script>
</html>
