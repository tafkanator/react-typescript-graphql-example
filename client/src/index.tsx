import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import RootView from './views/RootView';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({ uri: process.env.REACT_APP_SERVER_URL });

ReactDOM.render(
	<ApolloProvider client={client}>
		<BrowserRouter>
			<RootView />
		</BrowserRouter>
	</ApolloProvider>,
	document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
