import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import AuthorEntity from './AuthorEntity';

@Entity('articles')
@ObjectType('Article')
export default class ArticleEntity extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	public id!: number;

	@Field()
	@Column()
	public title!: string;

	@Field()
	@Column()
	public thumb!: string;

	@Field()
	@Column()
	public cover!: string;

	@Field()
	@Column()
	public excerpt!: string;

	@Field()
	@Column()
	public content!: string;

	@Field(() => AuthorEntity)
	@ManyToOne(() => AuthorEntity, { lazy: true })
	public author!: Promise<AuthorEntity> | AuthorEntity;
}
