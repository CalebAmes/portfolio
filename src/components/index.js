export const main = () => {
  const root = document.getElementById("root");
  window.localStorage.setItem("user-data", JSON.stringify({ theme: "main" }));
  root.classList.remove("darkmode");
  root.classList.remove("blue");
  root.classList.add("main");
};

export const darkmode = () => {
  const root = document.getElementById("root");
  window.localStorage.setItem(
    "user-data",
    JSON.stringify({ theme: "darkmode" })
  );
  root.classList.remove("main");
  root.classList.remove("blue");
  root.classList.add("darkmode");
};

export const blue = () => {
  const root = document.getElementById("root");
  window.localStorage.setItem("user-data", JSON.stringify({ theme: "blue" }));
  root.classList.remove("main");
  root.classList.remove("darkmode");
  root.classList.add("blue");
};

export const applyTheme = () => {
  const userDataString = window.localStorage.getItem("user-data");
  const userData = JSON.parse(userDataString);
  if (userData && userData?.theme) {
    userData && userData.theme === "main"
      ? main()
      : userData.theme === "darkmode" ? darkmode() : blue();
  }
};

export const themeHandler = theme => {
  const body = document.body;
  if (theme === "dark") {
    body.classList.add("dark-background");
    body.classList.remove("light-background");
    body.classList.remove("red-background");
    body.classList.remove("blue-background");
    localStorage.setItem("portfolio", JSON.stringify({ theme: "dark" }));
  } else if (theme === "light") {
    body.classList.add("light-background");
    body.classList.remove("dark-background");
    body.classList.remove("red-background");
    body.classList.remove("blue-background");
    localStorage.setItem(
      "portfolio",
      JSON.stringify({
        theme: "light"
      })
    );
  } else if (theme === "blue") {
    body.classList.add("blue-background");
    body.classList.remove("dark-background");
    body.classList.remove("red-background");
    body.classList.remove("light-background");
    localStorage.setItem(
      "portfolio",
      JSON.stringify({
        theme: "blue"
      })
    );
  } else if (theme === "red") {
    body.classList.add("red-background");
    body.classList.remove("dark-background");
    body.classList.remove("blue-background");
    body.classList.remove("light-background");
    localStorage.setItem(
      "portfolio",
      JSON.stringify({
        theme: "red"
      })
    );
  }
};
