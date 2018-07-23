module.exports = {
	cli: {
		migrationsDir: 'migrations',
	},
	database: 'database.sqlite',
	entities: ['src/entities/*.ts'],
	logging: process.env.NODE_ENV === 'development',
	migrations: ['migrations/*.ts'],
	name: 'default',
	synchronize: true,
	type: 'sqlite',
};
