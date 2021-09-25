import { BrowserRouter as Router,Link,Route,Switch } from 'react-router-dom';
import Book from './components/Book';
import Create from './components/Create';

function App() {
  return (
    <Router>
      <nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/create'>Create</Link>
					</li>
				</ul>
			</nav>
      <Switch>
        <Route exact path="/" component={Book} />
        <Route exact path="/create" component={Create} />
      </Switch>
    </Router>
  );
}

export default App;
