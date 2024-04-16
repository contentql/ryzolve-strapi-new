module.exports = {
  async afterCreate(event) {
    const { result } = event;

    if (result.source === "ryzolve") {
      async function downloadPDF(pdfURL) {
        try {
          const response = await fetch(pdfURL);
          if (!response.ok)
            throw new Error(`Failed to fetch PDF: ${response.statusText}`);
          return response.arrayBuffer(); // Use .buffer() to get the binary content
        } catch (error) {
          console.error("Error downloading PDF:", error);
          throw error;
        }
      }

      try {
        const pdf = await strapi.db
          .query("api::configuration.configuration")
          .findOne({ populate: { emailDocument: true } });

        console.log("pdf", pdf);

        const message = pdf.emailMessage;

        const pdfBuffer = await downloadPDF(pdf.emailDocument.url);

        await strapi.plugins["email"].services.email.send({
          to: `${result.email}`,
          subject: `${pdf.emailSubject}`,
          // text: `Hello ${result.name}`, // Replace with a valid field ID
          html: `Hi ${result.name}\n ${message}`,
          attachments: [
            {
              filename: "Ryzolve",
              content: Buffer.from(pdfBuffer).toString("base64"),
            },
          ],
        });
      } catch (err) {
        console.log(err);
      }
    }

    if (result.source === "training") {
      async function downloadPDF(pdfURL) {
        try {
          const response = await fetch(pdfURL);
          if (!response.ok)
            throw new Error(`Failed to fetch PDF: ${response.statusText}`);
          return response.arrayBuffer(); // Use .buffer() to get the binary content
        } catch (error) {
          console.error("Error downloading PDF:", error);
          throw error;
        }
      }

      try {
        const pdf = await strapi.db
          .query("api::configuration.configuration")
          .findOne({ populate: { emailDocument: true } });

        console.log("pdf", pdf);

        const message = pdf.trainingEmailMessage;

        await strapi.plugins["email"].services.email.send({
          to: `${result.email}`,
          subject: `${pdf.trainingEmailSubject}`,
          // text: `Hello ${result.name}`, // Replace with a valid field ID
          html: `Hi ${result.name}\n Use this  ${message}`,
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
};
