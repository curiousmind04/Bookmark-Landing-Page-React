import Downloads from "./components/Downloads";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Intro from "./components/Intro";
import MainNav from "./components/MainNav";

function App() {
  return (
    <>
      <MainNav />
      <main>
        <Intro />
        <Features />
        <Downloads />
        <FAQ />
      </main>
    </>
  );
}

export default App;
