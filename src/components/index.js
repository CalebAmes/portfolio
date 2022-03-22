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
      : userData.theme === "darkmode"
      ? darkmode()
      : blue();
  }
};

export const themeHandler = (theme) => {
  const body = document.body;
  if (theme === "desolate") {
    body.classList.add("desolate");
    body.classList.remove("galactic");
    body.classList.remove("solaris");
    body.classList.remove("classic");
    body.classList.remove("altitude");
    localStorage.setItem("portfolio", JSON.stringify({ theme: "desolate" }));
  } else if (theme === "galactic") {
    body.classList.add("galactic");
    body.classList.remove("desolate");
    body.classList.remove("solaris");
    body.classList.remove("altitude");
    body.classList.remove("classic");
    localStorage.setItem(
      "portfolio",
      JSON.stringify({
        theme: "galactic",
      })
    );
  } else if (theme === "classic") {
    body.classList.add("classic");
    body.classList.remove("desolate");
    body.classList.remove("solaris");
    body.classList.remove("altitude");
    body.classList.remove("galactic");
    localStorage.setItem(
      "portfolio",
      JSON.stringify({
        theme: "classic",
      })
    );
  } else if (theme === "solaris") {
    body.classList.add("solaris");
    body.classList.remove("desolate");
    body.classList.remove("altitude");
    body.classList.remove("classic");
    body.classList.remove("galactic");
    localStorage.setItem(
      "portfolio",
      JSON.stringify({
        theme: "solaris",
      })
    );
  } else if (theme === "altitude") {
    body.classList.add("altitude");
    body.classList.remove("desolate");
    body.classList.remove("galactic");
    body.classList.remove("classic");
    body.classList.remove("solaris");
    localStorage.setItem(
      "portfolio",
      JSON.stringify({
        theme: "altitude",
      })
    );
  }
};
