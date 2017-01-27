
(function () {

  const remote = require('electron').remote;

  function init() {
    document.getElementById("min-btn").addEventListener("click", function (e) {
      const window = remote.getCurrentWindow();
      //window.minimize();
    });

    document.getElementById("max-btn").addEventListener("click", function (e) {
      const window = remote.getCurrentWindow();
      if (!window.isMaximized()) {
        //window.maximize();
      } else {
        //window.unmaximize();
        }
      });

      document.getElementById("close-btn").addEventListener("click", function (e) {
        const window = remote.getCurrentWindow();
        window.hide();
      });
    };

    document.onreadystatechange = function () {
      if (document.readyState == "complete") {
        init();
      }
    };

    document.getElementById("ctc").addEventListener("click", function (e) {
      const clipboard = require('electron').clipboard
      clipboard.writeText("Copied this text from cloud");
      const window = remote.getCurrentWindow();
      window.hide();
    });
})();
