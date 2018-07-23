import path from 'path';
import { createConnection } from 'typeorm';

export default async function createDatabaseConnection() {
	return createConnection({
		database: 'database.sqlite',
		entities: [path.resolve(__dirname, '..', 'entities', '*.ts')],
		logging: process.env.NODE_ENV === 'development',
		synchronize: true,
		type: 'sqlite',
	}).catch(e => {
		throw new Error(e);
	});
}
