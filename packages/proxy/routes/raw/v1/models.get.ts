import { buildModelsPayload } from "@m365-copilot/proxy-lib";

export default defineEventHandler(() => {
  return buildModelsPayload();
});
