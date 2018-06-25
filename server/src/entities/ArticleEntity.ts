import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Field, ObjectType, ID } from 'type-graphql';
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
	author!: Promise<AuthorEntity> | AuthorEntity;
}
