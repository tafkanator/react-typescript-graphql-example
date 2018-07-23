import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import RootView from './views/RootView';
import './index.css';

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({ uri: `http://localhost:4000/graphql`, credentials: 'same-origin' });

ReactDOM.render(
	<ApolloProvider client={client}>
		<BrowserRouter>
			<RootView />
		</BrowserRouter>
	</ApolloProvider>,
	document.getElementById('root') as HTMLElement,
);
