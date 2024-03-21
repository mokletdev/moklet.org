import Header from "../_components/parts/Header";
import Opinions from "../_components/parts/Opinions";
import About from "../_components/parts/About";
import SubOrgan from "../_components/parts/SubOrgan";
import News from "../_components/parts/News";
import Aspiration from "../_components/parts/Aspiration";

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
