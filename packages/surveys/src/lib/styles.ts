import global from "@/styles/global.css?inline";

export const addStylesToDom = () => {
  if (document.getElementById("azidev__css") === null) {
    const styleElement = document.createElement("style");
    styleElement.id = "azidev__css";
    styleElement.innerHTML = global;
    document.head.appendChild(styleElement);
  }
}