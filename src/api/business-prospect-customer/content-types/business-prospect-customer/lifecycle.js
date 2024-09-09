module.exports = {
  async afterCreate(event) {
    const { result } = event;

    console.log({ result });

    try {
      const pdf = await strapi.db
        .query("api::configuration.configuration")
        .findOne({ populate: { emailDocument: true } });

      await strapi.plugins["email"].services.email.send({
        to: `${result.email}`,
        subject: "Ryzolve",
        // text: `Hello ${result.name}`, // Replace with a valid field ID
        html: `
          <p>Hi ${result.name},</p>
          <p>Thanks for choosing Ryzolve. Our team will get back to you shortly.</p>
          <p>Best regards,<br />The Ryzolve Team</p>
        `,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
