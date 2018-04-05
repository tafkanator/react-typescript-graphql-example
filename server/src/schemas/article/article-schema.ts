import gql from 'graphql-tag';

export default gql`
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
