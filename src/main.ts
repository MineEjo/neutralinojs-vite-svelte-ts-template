import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

// function showInfo() {
//   document.getElementById('info').innerHTML = `
//         ${NL_APPID} is running on port ${NL_PORT}  inside ${NL_OS}
//         <br/><br/>
//         <span>server: v${NL_VERSION} . client: v${NL_CVERSION}</span>
//         `;
// }

function openDocs() {
  // @ts-ignore
  Neutralino.os.open("https://neutralino.js.org/docs");
}

function openTutorial() {
  // @ts-ignore
  Neutralino.os.open("https://www.youtube.com/watch?v=txDlNNsgSh8&list=PLvTbqpiPhQRb2xNQlwMs0uVV0IN8N-pKj");
}

function setTray() {
  // @ts-ignore
  if(NL_MODE != "window") {
    console.log("INFO: Tray menu is only available in the window mode.");
    return;
  }
  let tray = {
    icon: "/resources/icons/trayIcon.png",
    menuItems: [
      {id: "VERSION", text: "Get version"},
      {id: "SEP", text: "-"},
      {id: "QUIT", text: "Quit"}
    ]
  };
  // @ts-ignore
  Neutralino.os.setTray(tray);
}

function onTrayMenuItemClicked(event) {
  switch(event.detail.id) {
    case "VERSION":
      // @ts-ignore
      Neutralino.os.showMessageBox("Version information",
        // @ts-ignore
        `Neutralinojs server: v${NL_VERSION} | Neutralinojs client: v${NL_CVERSION}`);
      break;
    case "QUIT":
      // @ts-ignore
      Neutralino.app.exit();
      break;
  }
}

function onWindowClose() {
  // @ts-ignore
  Neutralino.app.exit();
}

// @ts-ignore
Neutralino.init();

// @ts-ignore
Neutralino.events.on("trayMenuItemClicked", onTrayMenuItemClicked);
// @ts-ignore
Neutralino.events.on("windowClose", onWindowClose);

// @ts-ignore
if(NL_OS != "Darwin") { // TODO: Fix https://github.com/neutralinojs/neutralinojs/issues/615
  setTray();
}

export default app
