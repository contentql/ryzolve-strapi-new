module.exports = {
  async afterCreate(event) {
    const { result } = event;

    console.log({ result });
    console.log("Working");

    try {
      await strapi.plugins["email"].services.email.send({
        to: `${result.email}`,
        subject: "Ryzolve",
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
