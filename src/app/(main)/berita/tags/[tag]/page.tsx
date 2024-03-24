import { H1, H2, H3 } from "@/app/_components/global/Text";
import { findPostByTag } from "@/utils/database/tag.query"
import { SmallSectionWrapper } from "@/app/_components/global/Wrapper";
import { NewsFigure } from "@/app/_components/global/NewsFigure";

export default async function Tag({ params }: { params: { tag: string } }) {
    const filteredPost = await findPostByTag(params.tag,true)

  return (
    <SmallSectionWrapper id="tag">
      <div>
        <H2 className="mb-[54px]">Post dengan tag &quot;{params.tag}&quot;</H2>
        <div className="flex flex-wrap gap-x-[36px] gap-y-[62px]">
            {filteredPost?.map((post)=>(
                <NewsFigure post={post} key={post.id}/>
            ))}
        </div>
      </div>
    </SmallSectionWrapper>
  );
}
