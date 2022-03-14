// this is for the Electron version of this application
// import { ipcRenderer } from 'electron';

export const main = () => {
  const root = document.getElementById("root");
  window.localStorage.setItem('user-data', JSON.stringify({ theme: "main" }));
  root.classList.remove("darkmode");
  root.classList.remove("blue");
  root.classList.add("main");
};

export const darkmode = () => {
  const root = document.getElementById("root");
  window.localStorage.setItem('user-data', JSON.stringify({ theme: "darkmode" }));
  root.classList.remove("main");
  root.classList.remove("blue");
  root.classList.add("darkmode");
};

export const blue = () => {
  const root = document.getElementById("root");
  window.localStorage.setItem('user-data', JSON.stringify({ theme: "blue" }));
  root.classList.remove("main");
  root.classList.remove("darkmode");
  root.classList.add("blue");
};

export const applyTheme = () => {
  const userDataString = window.localStorage.getItem('user-data');
  const userData = JSON.parse(userDataString)
  if (userData && userData?.theme) {
    userData && userData.theme === 'main' ? main() : userData.theme === 'darkmode' ? darkmode() : blue();
  }
}
