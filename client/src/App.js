import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import HeroForm from './components/HeroForm';
import HeroesList from './components/HeroesList';
import HeroPage from './components/HeroPage';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/createHero">Create superhero</Link><br/>
            <Link to="/superheroes">Superheroes</Link><br/>
            <Link to="/superheroes/22">HeroPage</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/createHero" component={HeroForm} />
        <Route path="/superheroes" component={HeroesList} />
        <Route path="/superheroes/22" component={HeroPage} />

      </Switch>
    </Router>
  );
}

export default App;
