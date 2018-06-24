module.exports = {
	name: 'default',
	type: 'sqlite',
	database: 'database.sqlite',
	synchronize: true,
	logging: process.env.NODE_ENV === 'development',
	entities: ['src/entities/*.ts'],
	migrations: ['migrations/*.ts'],
	cli: {
		migrationsDir: 'migrations',
	},
};
