"use strict";
// @ts-ignore
//const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const stripe = require("stripe")(
  "sk_test_51O14wJSGKNDRcuJuuSuJKSjXvpuhFAIq3452rI9JSlQrX0RGFQHwtwv0b5ccxm6fP4MXriAfB91JQb3yyrQDMZl200yMKJxv01"
);

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    // @ts-ignore

    // retrieve item information
    const { products, username, email, discount } = ctx.request.body;
    try {
      // const lineItems = await Promise.all(
      //   products.map(async (product) => {
      //     const item = await strapi
      //       .service("api::course.course")
      //       .findOne(product.id);

      //     const totalAmount = item.price - (discount / 100) * item.price;

      //     return {
      //       price_data: {
      //         currency: "inr",
      //         product_data: {
      //           name: item.title,
      //         },
      //         unit_amount: Math.round(totalAmount * 100),
      //       },
      //       quantity: 1,
      //       // price: item.priceId,
      //       // quantity: 1,
      //     };
      //   })
      // );

      const lineItems = products.map((product) => {
        const totalAmount = product.price - (discount / 100) * product.price;

        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: product.title,
            },
            unit_amount: Math.round(totalAmount * 100),
          },
          quantity: 1,
        };
      });

      // create a stripe session
      const session = await stripe.checkout.sessions.create({
        customer_email: email,
        mode: "payment",
        success_url:
          process.env.CLIENT_URL +
          `/purchase-completed?success='true'&username=${username}`,
        cancel_url: process.env.CLIENT_URL + "/checkout",
        line_items: lineItems,
      });

      console.log({ session });

      // create the item
      await strapi.service("api::order.order").create({
        data: { username, products, stripeSessionToken: session.id },
      });

      return { id: session.id };
    } catch (error) {
      ctx.response.status = 500;
      return { error };
    }
  },
}));
