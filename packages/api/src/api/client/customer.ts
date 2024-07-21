import { Result } from "@cowk8s/types/errorHandlers";
import { NetworkError } from "@cowk8s/types/errors";

import { makeRequest } from "../../utils/makeRequest";

export class CustomerAPI {
  private apiHost: string;
  private environmentId: string;

  constructor(apiHost: string, environmentId: string) {
    this.apiHost = apiHost;
    this.environmentId = environmentId;
  }

  async create(userId: string): Promise<Result<{}, NetworkError | Error>> {
    return makeRequest(this.apiHost, `/api/v1/client/${this.environmentId}/people`, "POST", {
      environmentId: this.environmentId,
      userId,
    });
  }
}