const { gql } = require("apollo-server-express");

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
    members: [String]
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
    token: ID!
    email: String!
    password: String!
  }

  type Query {
    allUsers: [User]
    user(username: String!): User
    allBands: [BandInfo]
    Band(bandName: String!): BandInfo
    allOrders: [Order]
    Order(order_id: ID): Order
    actions: Actions
    allItems: [Item]
    item(name: String!): Item
    Auth: placeholder
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): User
  }
`;
module.exports = typeDefs;
