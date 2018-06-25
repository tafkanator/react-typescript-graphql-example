import path from 'path';
import { createConnection } from 'typeorm';

export default async function createDatabaseConnection() {
	return createConnection({
		type: 'sqlite',
		database: 'database.sqlite',
		synchronize: true,
		logging: process.env.NODE_ENV === 'development',
		entities: [path.resolve(__dirname, '..', 'entities', '*.ts')],
	}).catch(e => {
		throw new Error(e);
	});
}
