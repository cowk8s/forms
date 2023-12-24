
import { renderSurveyModal } from "@cowk8s/surveys";

const containerId = "azicloud-web-container";

export const renderWidget = () => {

  setTimeout(() => {
    renderSurveyModal();
  }, 1000);
};

export const addWidgetContainer = (): void => {
  const containerElement = document.createElement("div");
  containerElement.id = containerId;
  document.body.appendChild(containerElement);
};