import { createConnection } from 'typeorm';

export default async function createDatabaseConnection() {
	return createConnection({
		name: 'default',
		type: 'sqlite',
		database: 'database.sqlite',
		synchronize: true,
		logging: process.env.NODE_ENV === 'development',
		entities: ['../entities/*.ts'],
	}).catch(e => {
		throw new Error(e);
	});
}
