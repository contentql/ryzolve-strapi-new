module.exports = ({ env }) => ({
  // ...

  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
      register: {
        allowedFields: ["image", "phone", "agency", "country", "city"],
      },
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 9,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
        introspection: true,
      },
    },
  },
  email: {
    // config: {
    //   provider: "sendgrid",
    //   providerOptions: {
    //     apiKey: env("SENDGRID_API_KEY"),
    //   },
    //   settings: {
    //     defaultFrom: "akhil@contentql.io",
    //     defaultReplyTo: "akhil@contentql.io",
    //   },
    // },

    config: {
      provider: "strapi-provider-email-mailjet",
        providerOptions: {
          publicApiKey: env("MAILJET_PUBLIC_KEY"),
          secretApiKey: env("MAILJET_SECRET_KEY"),
        },
        settings: {
          defaultFrom: "manojkarajada.mk@gmail.com",
          defaultFromName: "Manoj",
          defaultTo: "manojkarajada.mk@gmail.com",
          defaultToName: "Manoj",
        },
      },
  },

  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME", "leewardslope"),
        api_key: env("CLOUDINARY_KEY", "783694461985968"),
        api_secret: env("CLOUDINARY_SECRET", "S0-Evp6iezzQU8jaLjqhYcqpXJg"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
