import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import ArticleEntity from './ArticleEntity';

@Entity('authors')
@ObjectType('Author')
export default class AuthorEntity extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	public id!: number;

	@Field()
	@Column()
	public name!: string;

	@Field(() => [ArticleEntity])
	@OneToMany(() => ArticleEntity, article => article.author, { lazy: true })
	articles!: Promise<ArticleEntity[]> | ArticleEntity[];
}

// // generate sample data
// const data: Author[] = [...Array(5)].map((_, i) => ({
// 	id: i,
// 	name: casual.full_name,
// }));
