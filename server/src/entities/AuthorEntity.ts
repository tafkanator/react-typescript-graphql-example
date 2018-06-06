import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('authors')
export default class AuthorEntity extends BaseEntity {
	@PrimaryGeneratedColumn() public id!: number;

	@Column() public name!: string;
}

// // generate sample data
// const data: Author[] = [...Array(5)].map((_, i) => ({
// 	id: i,
// 	name: casual.full_name,
// }));
