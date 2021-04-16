const { ApolloServer, gql } = require('apollo-server');
require('dotenv').config()
const connection = require('./db/connection');

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];


const typeDefs = gql`
  type Query {
    myTasksLists: [TaskList!]!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    avatar: String
  }

  type TaskList {
    id: ID!
    createdAt: String!
    title: String!
    progress: Float!
    
    users: [User!]!
    todo: [ToDo]!
  }

  type ToDo {
    id: ID!
    content: String!
    isCompleted: Boolean!

    taskList: TaskList!
  }
`;

const resolvers = {
  Query: {
    myTasksLists: () => [],
  },
};

const start = async () => {
    try{
    const db = await connection();
    const context = {
      db,
    };
    const server = new ApolloServer({ typeDefs, resolvers, context });
    server.listen().then(({ url }) => {
      console.log(`üöÄ  Server ready at ${url}`);
    });
    }catch(err){
      console.log(err);
    }
}

start();


