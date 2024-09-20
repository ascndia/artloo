import { BaseImageCard } from "@/components/Card/BaseImageCard";
import { BaseCarousel } from "@/components/Carousel/BaseCarousel";
import { SaveToCollection } from "@/components/Dialog/SaveToCollection";
// import FixedLayout from "@/components/FixedLayout";
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
          <BaseImageCard />
          <BaseImageCard />
          <BaseImageCard />
          <BaseImageCard />
          <BaseImageCard />
          <BaseImageCard />
        </BaseGallery>
      </WithContainer>
      <SectionDivider />
      <WithContainer>
        <BaseCarousel title="Featured Collections">
          <BaseImageCard />
          <BaseImageCard />
          <BaseImageCard />
          <BaseImageCard />
          <BaseImageCard />
          <BaseImageCard />
        </BaseCarousel>
      </WithContainer>
      <SectionDivider />
      <WithContainer>
        <BaseGallery title="Featured Articles" exploreLink="/articles">
          <BaseImageCard />
          <BaseImageCard />
          <BaseImageCard />
          <BaseImageCard />
          <BaseImageCard />
          <BaseImageCard />
        </BaseGallery>
      </WithContainer>
      <SaveToCollection />
    </FixedLayout>
  );
}
