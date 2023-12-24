
import { initialize } from "./lib/initialize";

const init = async () => {
  initialize();
}

const azicloud = {
  init
};

export type AzicloudType = typeof azicloud;
export default azicloud as AzicloudType;