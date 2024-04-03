module.exports = {
  async afterCreate(event) {
    // Connected to "Save" button in admin panel
    const { result } = event;

    try {
      console.log("wroking");
      await strapi.plugins["email"].services.email.send({
        to: `${result.email}`,
        subject: "The Strapi Email plugin worked successfully",
        text: `Hello ${result.name}`, // Replace with a valid field ID
        html: "Hello world!",
      });
    } catch (err) {
      console.log(err);
    }
  },
};
