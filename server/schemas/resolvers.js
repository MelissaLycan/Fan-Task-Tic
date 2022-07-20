const { AuthenticationError } = require("apollo-server-express");
const { User, Item, Category, Order, BandInfo } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    allUsers: async () => {
      const bandinfo = await User.find({}).populate({
        path: "users.bandMember",
        populate: "bandinfos",
      });
      return bandinfo;
    },

    user: async (parent, { username }) => {
      const user = await User.findOne({ username })
        .populate("bandMember")
        .populate({ path: "bandMember", populate: { path: "inventory" } })
        .exec();
      return user;
      // if (context.user) {
      //   const user = await User.findById(context.user._id).populate({
      //     path: "orders.products",
      //     populate: "category",
      //   });
      //   user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
      //   return user;
      // }
      // throw new AuthenticationError("Not logged in");
    },

    categories: async () => {
      return await Category.find();
    },

    allBands: async () => {
      const results = BandInfo.find();
      // .exec()
      // .then((response) => {
      //   console.log([response]);
      //   response.map((res) => {
      //     console.log(res.members);
      //   });
      // });
      return results;
    },

    band: async (parent, { _id }) => {
      return BandInfo.findById({ _id }).populate("inventory").exec();
    },

    allItems: async (parent, { category, name }) => {
      const params = {};
      if (category) {
        params.category = category;
      }
      if (name) {
        params.name = {
          $regex: name,
        };
      }
      return await Item.find(params).populate("category");
    },

    item: async (parent, { _id }) => {
      return await Item.findById(_id).populate("category");
    },

    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });
        return user.orders.id(_id);
      }
      throw new AuthenticationError("Not logged in");
    },

    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];
      const { products } = await order.populate("products");
      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`],
        });
        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });
        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });
      return { session: session.id };
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await user.comparePassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addOrder: async (parent, { items }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ items });
        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });
        return order;
      }
      throw new AuthenticationError("Not logged in");
    },

    // updatePassword: async (parent, args) => {
    // Need to figure out how to do this one
    // },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }
      throw new AuthenticationError("Not logged in");
    },

    updateItem: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Item.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
