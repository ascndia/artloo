"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Bookmark, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useSaveToCollection } from "@/state/save-to-collection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Checkbox } from "../ui/checkbox";
import CollectionForm from "../form/CollectionForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().nonempty("Name is required"),
  description: z.string().optional(),
  visibility: z.enum(["public", "private"], {
    errorMap: () => ({ message: "Select a visibility option" }),
  }),
  mature: z.boolean().default(false),
});

export type FormData = z.infer<typeof formSchema>;

export function SaveToCollection() {
  const { closeDialog, isDialogOpen } = useSaveToCollection();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      visibility: "public",
      mature: false,
    },
  });

  return (
    <Dialog open={isDialogOpen} onOpenChange={closeDialog}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Save to collection</DialogTitle>
        </DialogHeader>
        <Tabs className="">
          <TabsList className="">
            <TabsTrigger value="1" className="flex items-center space-x-2">
              <Bookmark className="h-4 w-4" />
              <span>Save post</span>
            </TabsTrigger>
            <TabsTrigger value="2" className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add new collection</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="1">
            <div className="py-4">
              <div className="font-bold mb-4">Your Collections</div>
              <div className="flex flex-col gap-4">
                <CollectionItem title="My Collection" id="1" />
                <CollectionItem title="My Collection" id="2" />
                <CollectionItem title="My Collection" id="3" />
                <CollectionItem title="My Collection" id="4" />
              </div>
            </div>
            <DialogFooter className="sm:justify-end ">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button type="button" variant="default">
                  Save
                </Button>
              </DialogClose>
            </DialogFooter>
          </TabsContent>
          <TabsContent value="2">
            <div className="py-4">
              <CollectionForm form={form} />
            </div>
            <DialogFooter className="sm:justify-end ">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button form="collectionForm" type="submit" variant="default">
                  Save
                </Button>
              </DialogClose>
            </DialogFooter>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

const CollectionItem = ({
  title = "My Collection",
  checked,
  id,
}: {
  title: string;
  checked?: boolean;
  id: string;
}) => {
  return (
    <div className="flex items-center space-x-4">
      <Checkbox checked={checked} className="size-5" id={id} />
      <label
        htmlFor={id}
        className=" font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {title}
      </label>
    </div>
  );
};

// import { useForm, SubmitHandler } from "react-hook-form";

// type Inputs = {
//   name: string;
//   description: string;
//   visibility: "public" | "private";
//   mature: boolean;
// };

// function CollectionForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<Inputs>();

//   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//       <div className="space-y-2">
//         <label htmlFor="name" className="block text-sm font-medium">
//           Name
//         </label>
//         <input
//           type="text"
//           id="name"
//           className="w-full rounded-md border bg-background px-3 py-2 shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
//           {...register("name", { required: true })}
//         />
//         {errors.name && (
//           <p className="text-red-600 text-sm">Name is required</p>
//         )}
//       </div>
//       <div className="space-y-2">
//         <label htmlFor="description" className="block text-sm font-medium">
//           Description
//         </label>
//         <textarea
//           id="description"
//           className="w-full rounded-md border bg-background px-3 py-2 shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
//           {...register("description")}
//         />
//       </div>
//       <div className="space-y-2">
//         <label htmlFor="visibility" className="block text-sm font-medium">
//           Visibility
//         </label>
//         <select
//           id="visibility"
//           className="w-full rounded-md border bg-background px-3 py-2 shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
//           {...register("visibility")}
//         >
//           <option value="public">Public</option>
//           <option value="private">Private</option>
//         </select>
//       </div>
//       <div className="space-y-2">
//         <label htmlFor="mature" className="block text-sm font-medium">
//           Mature
//         </label>
//         <input
//           type="checkbox"
//           id="mature"
//           className="rounded-md border bg-background px-3 py-2 shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
//           {...register("mature")}
//         />
//       </div>
//       <Button type="submit" className="w-full">
//         Save
//       </Button>
//     </form>
//   );
// }
