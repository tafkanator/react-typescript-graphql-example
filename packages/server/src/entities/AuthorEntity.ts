import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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
	public articles!: Promise<ArticleEntity[]> | ArticleEntity[];
}
