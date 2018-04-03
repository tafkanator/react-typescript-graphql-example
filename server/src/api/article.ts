import gql from 'graphql-tag';

export const schema = gql`
	type Article {
		id: ID!
		title: String!
		thumb: String
		content: String
	}

	extend type Query {
		article(id: ID!): Article
		articleList: [Article!]!
	}
`;

export const resolver = {
	Query: {
		article: () => ({
			id: 1,
		}),
	},
};
