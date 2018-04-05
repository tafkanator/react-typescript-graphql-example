import gql from 'graphql-tag';
import authorDb from '../db/author';

export const schema = gql`
	type Author {
		id: ID!
		name: String!
		articles: [Article]!
	}

	extend type Query {
		author(id: ID!): Author
	}
`;

export const resolver = {
	Query: {
		author: (_: any, { id }: any) => authorDb.findById(id),
	},
};
