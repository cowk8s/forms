import { Client } from "./api/client";

export class AzicloudAPI {
  client: Client;

  constructor() {
    this.client = new Client();
  }
}