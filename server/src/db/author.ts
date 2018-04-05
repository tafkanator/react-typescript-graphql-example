import * as casual from 'casual';
import database from '../services/database';

export interface Author {
	id: number;
	name: string;
}

// generate sample data
const data: Author[] = [...Array(5)].map((_, i) => ({
	id: i,
	name: casual.full_name,
}));

export default database<Author>(data);
