//per aspettare che tutta la pagina si carichi
window.addEventListener("DOMContentLoaded", async() => {

  await ilResto()
  console.log("resto finito")

  //per prendere il loader
  const loader = document.querySelector(".loader");

  //per rimuovere il loader
  loader.classList.add("hidden");
  loader.addEventListener("transitionend", () => {
    body.removeChild(document.querySelector(".loader"));
  });

});


async function ilResto() {
  console.log("inizio resto")

  //per prendere il body
  const body = document.querySelector("body");

  //per prendere gli elementi per la cartella macchinari
  const macchinari_toggle = document.querySelector(".macchinari-toggle");
  const macchinari_selector = document.querySelector(".macchinari-selector");
  const toggle_right = document.querySelector(".bx-chevron-right");
  const toggle_down = document.querySelector(".bx-chevron-down");

  //per aprire e chiudere la cartella macchianri
  macchinari_toggle.addEventListener("click", () => {
    macchinari_selector.classList.toggle("close");

    if (macchinari_selector.classList.contains("close")) {
      toggle_right.classList.remove("noDisplay");
      toggle_down.classList.add("noDisplay");
    } else {
      toggle_right.classList.add("noDisplay");
      toggle_down.classList.remove("noDisplay");
    }
  });

  //per prendere gli elementi per aprire e chiudere il menu laterale
  const sideBar_menu = document.querySelector(".sideBar-menu");
  const sideBar_toggle = document.querySelector(".sideBar-toggle");
  const sideBar_pannel = document.querySelector(".sideBar-pannel")

  //per aprire cliccando sulla barra
  sideBar_menu.addEventListener("click", () => {
    sideBar_menu.classList.remove("close");
    sideBar_pannel.classList.remove("none")
    sideBar_toggle.classList.remove("close")
  })

  sideBar_pannel.addEventListener("click", () => {
    sideBar_menu.classList.add("close");
    sideBar_pannel.classList.add("none")
    sideBar_toggle.classList.add("close")
  })

  //per aprire e chiudere la barra laterale
  sideBar_toggle.addEventListener("click", () => {
    sideBar_menu.classList.toggle("close");
    sideBar_pannel.classList.toggle("none")
    sideBar_toggle.classList.toggle("close")
  });


  //per cambiare lo sfondo del sito
  const main_theme = document.querySelector(".footer-theme-main");
  const side_theme_01 = document.querySelector(".footer-theme-sub01");
  const side_theme_02 = document.querySelector(".footer-theme-sub02");

  //per modificare il colore dello sfondo
  const color01 = "white-theme";
  const color02 = "acqua-theme";
  const color03 = "dark-theme";

  const colors = [color01, color02, color03];

  let intermediateColor = "";

  if (localStorage.getItem("backgroundColor") && localStorage.getItem("sideTheme01") && localStorage.getItem("sideTheme02")) {
    body.classList.remove("white-theme");
    main_theme.classList.remove("white-theme");
    side_theme_01.classList.remove("dark-theme");
    side_theme_02.classList.remove("acqua-theme");

    body.classList.add(localStorage.getItem("backgroundColor"));
    main_theme.classList.add(localStorage.getItem("backgroundColor"));
    side_theme_01.classList.add(localStorage.getItem("sideTheme01"));
    side_theme_02.classList.add(localStorage.getItem("sideTheme02"));
  }

  let i = 0;
  side_theme_01.addEventListener("click", () => {
    i = 0;
    colors.forEach((color) => {
      if (main_theme.classList.contains(color)) {
        intermediateColor = color;
        colors.forEach((element) => {
          if (side_theme_01.classList.contains(element) && i == 0) {
            // Scambio delle classi
            main_theme.classList.remove(intermediateColor);
            side_theme_01.classList.remove(element);

            main_theme.classList.add(element);
            localStorage.setItem("backgroundColor", element);
            side_theme_01.classList.add(intermediateColor);
            localStorage.setItem("sideTheme01", intermediateColor);

            //per cambiare il tema
            body.classList.remove(intermediateColor);
            body.classList.add(element);

            i++;
          }
        });
      }
    });
  });

  side_theme_02.addEventListener("click", () => {
    i = 0;
    colors.forEach((color) => {
      if (main_theme.classList.contains(color)) {
        intermediateColor = color;
        colors.forEach((element) => {
          if (side_theme_02.classList.contains(element) && i == 0) {
            main_theme.classList.remove(intermediateColor);
            side_theme_02.classList.remove(element);

            main_theme.classList.add(element);
            localStorage.setItem("backgroundColor", element);
            side_theme_02.classList.add(intermediateColor);
            localStorage.setItem("sideTheme02", intermediateColor);

            //per cambiare il tema
            body.classList.remove(intermediateColor);
            body.classList.add(element);

            i++;
          }
        });
      }
    });
  });

}


async function sleep(seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}
