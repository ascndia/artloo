"use client";

// import { Card } from "@/components/ui/card";
// import { HeartIcon, MessageCircleIcon, LinkIcon } from "lucide-react";
// import Image from "next/image";

// export function MasonryCard({ data: { name, src } }: any) {
//   return (
//     <Card className="w-full  overflow-hidden relative">
//       <div className="relative ">
//         <Image
//           src={src}
//           alt="Two steampunk beetle sculptures on a wooden surface"
//           layout="fill"
//           objectFit="cover"
//           className="absolute inset-0 w-auto h-auto"
//         />
//         <button className="absolute top-2 right-2 p-2 bg-black bg-opacity-50 rounded-full">
//           <LinkIcon className="w-5 h-5 text-white" />
//         </button>
//         <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-50 text-white px-2 p-2 rounded-lg">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center space-x-4">
//               <span className="flex items-center">
//                 <HeartIcon className="w-5 h-5 text-yellow-500 mr-1" />
//                 3208
//               </span>
//               <span className="flex items-center">
//                 <MessageCircleIcon className="w-5 h-5 text-red-500 mr-1" />
//                 1224
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// }
import React from "react";
import { HeartIcon, MessageCircleIcon, LinkIcon } from "lucide-react";
import Image from "next/image";
import ExampleMenu from "../card/menu/ExampleMenu";

interface MasonryCardProps {
  data: {
    id: number;
    src: string;
    name: string;
    likes: number;
    comments: number;
    shares: number;
  };
}

export const MasonryCard: React.FC<any> = ({ data }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md bg-gray-900">
      <Image
        src={data.src}
        alt={data.name}
        layout="responsive"
        width={300}
        height={400}
        className="object-cover"
      />
      {/* <div className="absolute top-2 right-2 p-2 bg-black bg-opacity-50 rounded-full">
        <LinkIcon className="w-5 h-5 text-white" />
      </div> */}
      <ExampleMenu />
      {/* <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-60 p-2 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <HeartIcon className="w-5 h-5 text-yellow-500 mr-1" />
              {data.likes}
            </span>
            <span className="flex items-center">
              <MessageCircleIcon className="w-5 h-5 text-red-500 mr-1" />
              {data.comments}
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
};
