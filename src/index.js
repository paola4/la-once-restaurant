import "./styles/main.css";
import _ from "lodash";
import menu from "./menu";
import about from "./about";
import home from "./home";

console.log("Hello, world!");
loadTab(home);
checkTabs();

// Cceck if a tab was clicked to render its content
function checkTabs() {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", selectTab);
  });
}

// If a tab was selected, load the tab content into the content div
function selectTab(event) {
  console.log("Tab selected");
  const tab = event.target.id;
  switch (tab) {
    case "home":
      loadTab(home);
      break;
    case "menu":
      loadTab(menu);
      break;
    case "about":
      loadTab(about);
      break;
    default:
      break;
  }
}

function loadTab(tab) {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.appendChild(tab());
}
