// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const electron = require("electron");
const ipcRender = electron.ipcRenderer;
ipcRender.on("CPU", (event, data) => {
    document.getElementById("CPU").innerHTML = data.toFixed(2);
    console.log("CPU", data);
});

ipcRender.on("MEMUsage", (event, data) => {
    document.getElementById("MEMUsage").innerHTML = data.toFixed(2);
    console.log("MEMUsage", data);
});

ipcRender.on("TotalMem", (event, data) => {
    document.getElementById("TotalMem").innerHTML = data.toFixed(2);
    console.log("TotalMem", data);
});

ipcRender.on("Platform", (event, data) => {
    document.getElementById("Platform").innerHTML = data;
    console.log("Platform", data);
});