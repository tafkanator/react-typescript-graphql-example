import * as React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { HomeViewQuery } from '../../generated/schema-types';
import './home-view.css';

const HOME_VIEW_QUERY = gql`
	query HomeView {
		articleList {
			id
			title
			excerpt
			thumb
			content
			author {
				name
			}
		}
	}
`;

class ViewQuery extends Query<HomeViewQuery> {}

export default () => (
	<div className="view home-view">
		<ViewQuery query={HOME_VIEW_QUERY}>
			{({ loading, error, data }) =>
				data && data.articleList ? (
					data.articleList.map(article => (
						<article key={article.id} className="home-view__article">
							<Link to={`/article/${article.id}`} className="home-view__article__thumb">
								<img src={article.thumb} alt={article.title} />
							</Link>
							<p className="home-view__article__prefix">{article.author.name}</p>
							<h2 className="home-view__article__title">{article.title}</h2>
							<p className="home-view__article__content">{article.excerpt}</p>

							<Link to={`/article/${article.id}`} className="home-view__article__link">
								Read more
							</Link>
						</article>
					))
				) : (
					<p>Loading...</p>
				)
			}
		</ViewQuery>
	</div>
);
