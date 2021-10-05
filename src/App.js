import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import {Home} from './components/Home';
import {Students} from './components/Students';
import {QueryClientProvider, QueryClient} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import './App.css';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/students'>Students</Link>
							</li>
						</ul>
					</nav>
					<Switch>
						<Route path='/students'>
							<Students />
						</Route>
						<Route path='/'>
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
			<ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
		</QueryClientProvider>
	);
}

export default App;
