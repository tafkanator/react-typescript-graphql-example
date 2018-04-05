import * as React from 'react';
import { Link } from 'react-router-dom';
import './article-view.css';

export default () => (
	<article className="article-view">
		<h2 className="article-view__title">Tere 123</h2>

		<div className="view">
			<img className="article-view__thumb" src="https://picsum.photos/800/500?image=1018" alt="Tere 123" />

			<p className="article-view__content">Lorem ipsum</p>
			<p className="article-view__prefix">Igor Viigor</p>

			<Link to="/">Back to list view</Link>
		</div>
	</article>
);
