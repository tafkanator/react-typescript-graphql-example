import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';

const books = [
	{
		title: 'Harry Potter and the Chamber of Secrets',
		author: 'J.K. Rowling',
	},
	{
		title: 'Jurassic Park',
		authPor: 'Michael Crichton',
	},
];

const typeDefs = gql`
	type Book {
		title: String
		author: String
	}

	type Query {
		books: [Book]
	}
`;

const resolvers = {
	Query: {
		books: () => books,
	},
};

export default async function createGraphqlServer(app: express.Express) {
	const server = new ApolloServer({ typeDefs, resolvers });

	server.applyMiddleware({ app });

	return server;
}
