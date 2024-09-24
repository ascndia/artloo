import { BaseImageCard } from "@/components/card/BaseImageCard";
import { BaseCarousel } from "@/components/carousel/BaseCarousel";
import { SaveToCollection } from "@/components/dialog/SaveToCollection";
import { BaseGallery } from "@/components/gallery/BaseGallery";
import SectionDivider from "@/components/SectionDivider";
import WithContainer from "@/components/WithContainer";
import dynamic from "next/dynamic";

const FixedLayout = dynamic(() => import("@/components/FixedLayout"), {
  ssr: false,
});

export default function Home() {
  return (
    <FixedLayout>
      <WithContainer>
        <BaseGallery
          title="Featured Images"
          exploreLink="/featured"
          exploreText="View All"
        >
          {Array.from(Array(10), () => (
            <BaseImageCard />
          ))}
        </BaseGallery>
      </WithContainer>
      <SectionDivider />
      <WithContainer>
        <BaseGallery title="Featured Articles" exploreLink="/articles">
          {Array.from(Array(10), () => (
            <BaseImageCard />
          ))}
        </BaseGallery>
      </WithContainer>
      <SaveToCollection />
    </FixedLayout>
  );
}
