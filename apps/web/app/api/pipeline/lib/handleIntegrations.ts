
import { TIntegration } from "@cowk8s/types/integration";

export const handleIntegrations = async (
  integrations: 
) => {
  for (const integration of integrations) {
    switch (integration.type) {
      case "googleSheets":
        await 
    }
  }
}