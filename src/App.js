import { Header } from "./Header";
import { About } from "./About";
import { Alphabet } from "./Alphabet";
import { Syllables } from "./Syllables";
import { Phrasebook } from "./Prasebook";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/abc" component={Alphabet} />
          <Route path="/reading" component={Syllables} />
          <Route path="/vocabulary" component={Phrasebook} />
          <Redirect to="/about" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
