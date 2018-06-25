import { Resolver, Query, Arg, Int, Mutation } from 'type-graphql';
import AuthorEntity from '../entities/AuthorEntity';
import AddAuthorInputType from './types/AddAuthorInputType';

@Resolver()
export default class AuthorResolver {
	@Query(() => AuthorEntity, { nullable: true, description: 'Returns author by id' })
	async author(
		@Arg('id', () => Int)
		id: number,
	): Promise<AuthorEntity | undefined> {
		return AuthorEntity.findOne(id);
	}

	@Mutation(() => AuthorEntity, { description: 'Create new author' })
	async createAuthor(@Arg('input') input: AddAuthorInputType): Promise<AuthorEntity> {
		const author = AuthorEntity.create(input);

		return author.save();
	}
}
