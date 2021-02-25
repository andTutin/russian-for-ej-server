import { Header } from "./Header";
import { About } from "./About";
import { Alphabet } from "./Alphabet";
import { Syllables } from "./Syllables";
import { Phrasebook } from "./Prasebook";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Alphabet />
        <Syllables />
        <Phrasebook />
      </main>
    </>
  );
}

export default App;
