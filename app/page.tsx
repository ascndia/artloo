import { BaseImageCard } from "@/components/cards/BaseImageCard";
import { ImageCard } from "@/components/cards/ImageCard";
import { SaveToCollection } from "@/components/Dialog/SaveToCollection";
import FixedLayout from "@/components/FixedLayout";
import { BaseGallery } from "@/components/gallery/BaseGallery";
import SectionDivider from "@/components/SectionDivider";
import WithContainer from "@/components/WithContainer";

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
        <BaseGallery
          title="Featured Artist"
          exploreLink="/latest"
          exploreText="View All"
          headingLevel="h3"
        >
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </BaseGallery>
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
