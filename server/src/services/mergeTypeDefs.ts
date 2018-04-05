import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';
// import {mer} from 'graphql-tools'

export default function mergeTypeDefs(schemaParts: DocumentNode[]) {
	const typesTofind = ['Query', 'Mutation', 'Subscription'];
	const foundTypes = [false, false, false];

	schemaParts.some(part =>
		part.definitions.some(def => {
			if ('name' in def && def.name && 'value' in def.name) {
				const index = typesTofind.indexOf(def.name.value);

				if (index !== -1) {
					foundTypes[index] = true;
				}

				return foundTypes.every(t => t);
			}

			return foundTypes.every(t => t);
		}),
	);

	const rootSchemaStr = typesTofind
		.filter((_, index) => foundTypes[index])
		.map(type => `type ${type}`)
		.join('\n');

	return rootSchemaStr ? [gql(rootSchemaStr), ...schemaParts] : schemaParts;
}
