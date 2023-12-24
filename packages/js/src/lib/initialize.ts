
import { trackAction } from "./actions";

import { addWidgetContainer } from "./widget";

export const initialize = async (
) => {
  addWidgetContainer();

  // and track the new session event
  await trackAction();
}