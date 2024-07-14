import "server-only";

import { cache as reactCache } from "react";
import { cache } from "../cache";

export const getProductByEnvironmentId = reactCache(
  (environmentId: string): Promise<TProduct | null> =>
    cache(
      async () => {
        let productPrisma;
      }
    )()
);
