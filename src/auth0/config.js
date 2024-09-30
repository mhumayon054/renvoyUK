import { app_mode } from "../constants";
import configJson_dev from "./auth_config_dev.json";
import configJson_pro from "./auth_config_production.json";
import configJson_sta from "./auth_config_staging.json";
import configJson_app from "./auth_config_app.json";

let configJson = app_mode === "production" ? configJson_pro : app_mode === "staging" ? configJson_app : app_mode === "development" ? configJson_sta : configJson_dev;

export { configJson }
export function getConfig() {
  // Configure the audience here. By default, it will take whatever is in the config
  // (specified by the `audience` key) unless it's the default value of "YOUR_API_IDENTIFIER" (which
  // is what you get sometimes by using the Auth0 sample download tool from the quickstart page, if you
  // don't have an API).
  // If this resolves to `null`, the API page changes to show some helpful info about what to do
  // with the audience.
  const audience =
    configJson.audience && configJson.audience !== "YOUR_API_IDENTIFIER"
      ? configJson.audience
      : null;

  return {
    domain: configJson.domain,
    clientId: configJson.clientId,
    ...(audience ? { audience } : null),
  };
}
