/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AokCsMvkYGf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ExampleCard() {
  return (
    <Card
      key="1"
      className="rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto hover:shadow-xl transition-all duration-200"
    >
      <img
        alt="Profile picture"
        className="object-cover w-full"
        height="320"
        src="/placeholder.png"
        style={{ aspectRatio: "320/320", objectFit: "cover" }}
        width="320"
      />
      <CardContent className="p-4">
        <h2 className="text-2xl font-bold hover:text-gray-700 transition-all duration-200">
          Emily Johnson
        </h2>
        <h3 className="text-gray-500 hover:text-gray-600 transition-all duration-200">
          Front-end Developer
        </h3>
        <p className="mt-2 text-gray-600 hover:text-gray-700 transition-all duration-200">
          Passionate about creating interactive user interfaces.
        </p>
        <div className="flex mt-4 space-x-2">
          <Button
            className="w-full hover:bg-gray-700 hover:text-white transition-all duration-200"
            size="sm"
          >
            Follow
          </Button>
          <Button
            className="w-full hover:border-gray-700 hover:text-gray-700 transition-all duration-200"
            size="sm"
            variant="outline"
          >
            Message
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
