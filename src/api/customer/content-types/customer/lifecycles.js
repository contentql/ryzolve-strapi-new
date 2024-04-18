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

        const message = pdf.documentEmailMessage;

        const updatedMessage = message.replace(
          "https://s.ryzolve.com",
          `${pdf.emailDocument.url}`
        );

        const pdfBuffer = await downloadPDF(pdf.emailDocument.url);

        await strapi.plugins["email"].services.email.send({
          to: `${result.email}`,
          subject: `${pdf.documentEmailSubject}`,
          // text: `Hello ${result.name}`, // Replace with a valid field ID
          html: `Hi ${result.name}\n ${updatedMessage}`,
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
          .findOne({ populate: { emailDocument: true, coupons: true } });

        console.log("pdf", pdf);

        const message = pdf.offerEmailMessage;

        const updatedMessage = message.replace(
          "20%OFF",
          `${pdf.coupons.percentage}% OFF`
        );

        const couponUpdateMessage = updatedMessage.replace(
          "RYZOLVE2024",
          `${pdf.coupons.coupon}`
        );

        console.log(updatedMessage);

        await strapi.plugins["email"].services.email.send({
          to: `${result.email}`,
          subject: `${pdf.offerEmailSubject}`,
          // text: `Hello ${result.name}`, // Replace with a valid field ID
          html: `Hi ${result.name}\n Use this coupon code : ${pdf.coupons.coupon}\n ${couponUpdateMessage}`,
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
};
