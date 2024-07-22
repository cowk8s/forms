import global from "@/styles/global.css?inline";

export const addStylesToDom = () => {
  if (document.getElementById("cowk8s__css") === null) {
    const styleElement = document.createElement("style");
    styleElement.id = "cowk8s__css";
    styleElement.innerHTML = global;
    document.head.appendChild(styleElement);
  }
}