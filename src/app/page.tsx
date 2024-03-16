import Header from "./components/parts/Header";
import Opinions from "./components/parts/Opinions/";
import About from "./components/parts/About";
import SubOrgan from "./components/parts/SubOrgan";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <SubOrgan />
      <Opinions />
    </>
  );
}
