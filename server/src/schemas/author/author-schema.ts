import gql from 'graphql-tag';

export default gql`
	type Author {
		id: ID!
		name: String!
		articles: [Article]!
	}

	extend type Query {
		author(id: ID!): Author
	}
`;
