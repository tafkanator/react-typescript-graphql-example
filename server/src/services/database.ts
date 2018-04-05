export type Database<O> = Array<{ [P in keyof O]: O[P] }>;

export type RowId = string | number;

export default <O extends object>(database: Database<O>) => ({
	findById: (id: RowId) => findById<O>(database, 'id', id).data,

	findAll: () => database,

	add: (row: O) => database.push(Object.assign({ id: database.length }, row)),

	update: (id: RowId, data: O) => {
		const oldData = findById(database, 'id', id);

		database[oldData.index] = Object.assign(oldData.data, data);
	},
});

function findById<O>(database: O[], key: any, value: any) {
	const index = database.findIndex((row: any) => key in row && row[key] === value);
	const data = database[index];

	return { index, data };
}
