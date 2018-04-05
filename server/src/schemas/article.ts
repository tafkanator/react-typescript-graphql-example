import gql from 'graphql-tag';
import articleDb from '../db/article';

export const schema = gql`
	type Article {
		id: ID!
		title: String!
		thumb: String
		content: String
		author: Author!
	}

	extend type Query {
		article(id: ID!): Article
		articleList: [Article!]!
	}
`;

export const resolver = {
	Query: {
		article: (_: any, { id }: any) => articleDb.findById(id),
		articleList: articleDb.findAll,
	},
};
