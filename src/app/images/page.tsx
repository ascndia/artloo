"use client";

import { BaseImageCard } from "@/components/card/BaseImageCard";
import { MasonryGrid } from "@/components/masonry/MasonryGrid";
import { Box } from "@chakra-ui/layout";
import React from "react";
import cats from "./cat";
import FixedLayout from "@/components/FixedLayout";
import WithContainer from "@/components/WithContainer";
import { MasonryCard } from "@/components/masonry/MasonryCard";
import { TagScroller } from "@/components/Tags";

export default function page() {
  const [items] = React.useState(() =>
    Array.from(Array(5000), () => ({
      name: "Cats",
      src: randomChoice(cats),
    }))
  );
  return (
    <FixedLayout>
      <WithContainer>
        <TagScroller
          data={[
            { name: "Cats", id: 1 },
            { name: "Dogs", id: 2 },
            { name: "Birds", id: 3 },
            { name: "Reptiles", id: 4 },
            { name: "Fish", id: 5 },
            { name: "Amphibians", id: 6 },
            { name: "Insects", id: 7 },
            { name: "Others", id: 8 },
            { name: "All", id: 9 },
            { name: "Cats", id: 10 },
            { name: "Dogs", id: 11 },
            { name: "Birds", id: 12 },
            { name: "Reptiles", id: 13 },
            { name: "Fish", id: 14 },
            { name: "Amphibians", id: 15 },
            { name: "Insects", id: 16 },
            { name: "Others", id: 17 },
            { name: "All", id: 18 },
            { name: "Cats", id: 19 },
            { name: "Dogs", id: 20 },
            { name: "Birds", id: 21 },
            { name: "Reptiles", id: 22 },
            { name: "Fish", id: 23 },
            { name: "Amphibians", id: 24 },
            { name: "Insects", id: 25 },
            { name: "Others", id: 26 },
            { name: "All", id: 27 },
            { name: "Cats", id: 28 },
            { name: "Dogs", id: 29 },
            { name: "Birds", id: 30 },
            { name: "Reptiles", id: 31 },
            { name: "Fish", id: 32 },
            { name: "Amphibians", id: 33 },
            { name: "Insects", id: 34 },
            { name: "Others", id: 35 },
            { name: "All", id: 36 },
            { name: "Cats", id: 37 },
            { name: "Dogs", id: 38 },
            { name: "Birds", id: 39 },
            { name: "Reptiles", id: 40 },
            { name: "Fish", id: 41 },
            { name: "Amphibians", id: 42 },
            { name: "Insects", id: 43 },
            { name: "Others", id: 44 },
            { name: "All", id: 45 },
            { name: "Cats", id: 46 },
            { name: "Dogs", id: 47 },
            { name: "Birds", id: 48 },
            { name: "Reptiles", id: 49 },
            { name: "Fish", id: 50 },
            { name: "Amphibians", id: 51 },
            { name: "Insects", id: 52 },
            { name: "Others", id: 53 },
            { name: "All", id: 54 },
            { name: "Cats", id: 55 },
            { name: "Dogs", id: 56 },
            { name: "Birds", id: 57 },
            { name: "Reptiles", id: 58 },
            { name: "Fish", id: 59 },
            { name: "Amphibians", id: 60 },
            { name: "Insects", id: 61 },
            { name: "Others", id: 62 },
            { name: "All", id: 63 },
            { name: "Cats", id: 64 },
            { name: "Dogs", id: 65 },
            { name: "Birds", id: 66 },
            { name: "Reptiles", id: 67 },
            { name: "Fish", id: 68 },
            { name: "Amphibians", id: 69 },
          ]}
        />
        <MasonryGrid className="my-0" render={MasonryCard} items={items} />
      </WithContainer>
    </FixedLayout>
  );
}

const FakeCard = ({ data: { name, src } }: any) => (
  <Box
    className={
      "flex flex-col justify-center items-center h-fit w-full min-h-32"
    }
  >
    <img className={"w-full h-full block"} alt="kitty" src={src} />
    <span children={name} />
  </Box>
);

const randomChoice = (items: any) =>
  items[Math.floor(Math.random() * items.length)];
