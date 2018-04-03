// import * as merge from 'deepmerge';
import gql from 'graphql-tag';

export default function getTypeDefs(schemaParts: any[]) {
	// find type definitions, read their contents and merge them into one

	// merge all into one string
	// const typeDefinitions = schemaParts.map(fileContents => {
	// 	const file = parseContent(fileContents);

	// 	return file;
	// });

	const rootSchema = gql`
		type Query {
			test: Boolean
		}
	`;

	// const typeDefinitions = merge.all<any>([rootSchema, ...schemaParts]);
	console.log('typeDefinitions', schemaParts);

	return [rootSchema, ...schemaParts];
}

// function parseContent(fileContents: string) {
// 	console.log('fileContents', fileContents);
// 	const startIndex = fileContents.indexOf('gql`') + 'gql`'.length;
// 	const endIndex = fileContents.indexOf('`', startIndex + 1);

// 	return fileContents.substring(startIndex, endIndex);
// }
