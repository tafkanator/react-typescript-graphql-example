import casual from 'casual';
import createDatabaseConnection from '../src/app/createDatabaseConnection';
import AuthorEntity from '../src/entities/AuthorEntity';
import ArticleEntity from '../src/entities/ArticleEntity';

(async () => {
	await createDatabaseConnection();

	const authors = await addAuthors();
	const articles = await addArticles(authors);

	console.log('New data generated', { authors, articles });
})();

async function addAuthors() {
	const data = [...Array(5)].map(() => ({
		name: casual.full_name,
	}));

	return Promise.all(data.map(author => AuthorEntity.create(author).save()));
}

async function addArticles(authors: AuthorEntity[]) {
	const data = [...Array(20)].map(() => {
		const imgId = casual.integer(1, 1080);
		const content = casual.sentences();

		return {
			excerpt: content.length > 50 ? `${content.substr(0, 50)}...` : content,
			content,
			thumb: `https://picsum.photos/200/200?image=${imgId}`,
			cover: `https://picsum.photos/1024/768?image=${imgId}`,
			title: casual.title,
			author: authors[Math.floor(Math.random() * authors.length)],
		};
	});

	return Promise.all(data.map(article => ArticleEntity.create(article).save()));
}
