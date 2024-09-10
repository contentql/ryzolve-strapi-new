"use strict";

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/stripe/webhook",
      handler: "stripe-webhook.handleWebhook",
      config: {
        auth: false, // Disable authentication for the webhook route
      },
    },
  ],
};
