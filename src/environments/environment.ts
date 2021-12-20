import {domain,clientId,audience,serverUrl} from '../../auth_config.json';

export const environment = {
  production: false,
  auth: {
    domain: "domain",
    clientId: "clientId",
    redirectUri: window.location.origin,
    audience,
  },

  dev: {
    serverUrl
  }
};

