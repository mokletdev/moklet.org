import Header from "./components/parts/Header";
import Opinions from "./components/parts/Opinions/";
import About from "./components/parts/About";
import SubOrgan from "./components/parts/SubOrgan";
import News from "./components/parts/News";
import Aspiration from "./components/parts/Aspiration";

export default function Home() {
  return (
    <>
      <Header />
      <News />
      <About />
      <SubOrgan />
      <Aspiration />
      <Opinions />
    </>
  );
}
