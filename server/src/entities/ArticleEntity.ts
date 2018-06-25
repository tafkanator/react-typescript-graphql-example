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
	public content!: string;

	@Field(() => AuthorEntity)
	@ManyToOne(() => AuthorEntity, { lazy: true })
	author!: Promise<AuthorEntity> | AuthorEntity;

	// @Column() public authorId!: number;
}

// generate sample data
// const data = [...Array(20)].map((_, i) => {
// 	const imgId = casual.integer(1, 1080);
// 	const content = casual.sentences();

// 	return {
// 		id: i,
// 		excerpt: content.length > 50 ? `${content.substr(0, 50)}...` : content,
// 		content,
// 		thumb: `https://picsum.photos/200/200?image=${imgId}`,
// 		cover: `https://picsum.photos/1024/768?image=${imgId}`,
// 		title: casual.title,
// 		authorId: casual.integer(0, 4),
// 	};
// });
