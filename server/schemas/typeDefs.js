const { gql } = require("apollo-server-express");

// TODO: Find a way to add updatePassword mutation

const typeDefs = gql`
  type User {
    _id: ID
    firstname: String
    lastname: String
    username: String
    email: String
    password: String
    bandMember: [BandInfo]!
    orders: [Order]!
    actions: [Actions]!
  }

  type BandInfo {
    _id: ID
    bandName: String
    website: String
    spotify: String
    bandsintown: String
    members: [Members]
    socialLinks: [String]
    inventory: [Item]
  }

  type Order {
    order_id: ID
    purchaseDate: String
    products: [Item]
  }

  type Actions {
    _id: ID
    name: String
    platform: String
    complete: String
    actionValue: Int
    input: String
  }

  type Category {
    _id: ID
    name: String
  }

  type Item {
    _id: ID
    name: String
    image_file: String
    current_stock: Int
    cost: Float
    sales_price: Float
    order_link: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Checkout {
    session: ID
  }

  type Members {
    _id: ID
    name: String
    instrument: String
    image: String
  }

  type Query {
    allUsers: [User]
    user(username: String!): User
    categories: [Category]
    allBands: [BandInfo]
    band(_id: ID!): BandInfo
    allItems: [Item]
    item(name: String!): Item
    order(order_id: ID): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    login(email: String!, password: String!): Auth

    addUser(username: String!, email: String!, password: String!): Auth

    addOrder(products: [ID]!): Order

    updateUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): User

    updateItem(_id: ID!, current_stock: Int!): Item
  }
`;
module.exports = typeDefs;
