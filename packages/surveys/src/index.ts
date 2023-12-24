import { SurveyModal } from "@/components/general/SurveyModal";
import { addStylesToDom } from "@/lib/styles";
import { h, render } from "preact";

export const renderSurveyModal = () => {
  addStylesToDom();

  // add container element to DOM
  const element = document.createElement("div");
  element.id = "azicloud-modal-container";
  document.body.appendChild(element);
  render(h(SurveyModal, {}), element);
};