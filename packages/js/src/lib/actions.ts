
import { NetworkError, Result, okVoid } from "./errors";
import { renderWidget } from "./widget";

export const trackAction = async (
): Promise<Result<void, NetworkError>> => {
  triggerSurvey()
  return okVoid();
}

export const triggerSurvey = (): void => {
  renderWidget();
}