import Header from "../_components/parts/Header";
import Opinions from "../_components/parts/Opinions";
import About from "../_components/parts/About";
import SubOrgan from "../_components/parts/SubOrgan";
import News from "../_components/parts/News";
import Aspiration from "../_components/parts/Aspiration";
import { findNewestPost } from "@/utils/database/post.query";

export default async function Home() {
  const latestPosts = await findNewestPost(5);

  return (
    <>
      <Header />
      <News latestPosts={latestPosts} />
      <About />
      <SubOrgan />
      <Aspiration />
      <Opinions />
    </>
  );
}
