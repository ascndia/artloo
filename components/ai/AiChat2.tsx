// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/kKmp3JjcUqN
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import Link from "next/link";
// import { Textarea } from "@/components/ui/textarea";

// export default function Component() {
//   return (
//     <div className="flex flex-col h-screen">
//       <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">AI Chatroom</h1>
//           <div className="flex items-center gap-4">
//             <Button variant="ghost" size="icon">
//               <SettingsIcon className="w-5 h-5" />
//             </Button>
//             <Avatar className="w-8 h-8 border">
//               <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
//               <AvatarFallback>AC</AvatarFallback>
//             </Avatar>
//           </div>
//         </div>
//       </header>
//       <div className="flex-1 flex">
//         <div className="bg-background border-r w-64 p-4">
//           <h2 className="text-lg font-medium mb-4">Connected AI</h2>
//           <div className="space-y-2">
//             <Link
//               href="#"
//               className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted"
//               prefetch={false}
//             >
//               <Avatar className="w-8 h-8 border">
//                 <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
//                 <AvatarFallback>AC</AvatarFallback>
//               </Avatar>
//               <div>
//                 <div className="font-medium">ChatGPT</div>
//                 <div className="text-sm text-muted-foreground">Online</div>
//               </div>
//             </Link>
//             <Link
//               href="#"
//               className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted"
//               prefetch={false}
//             >
//               <Avatar className="w-8 h-8 border">
//                 <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
//                 <AvatarFallback>AC</AvatarFallback>
//               </Avatar>
//               <div>
//                 <div className="font-medium">Alexa</div>
//                 <div className="text-sm text-muted-foreground">Online</div>
//               </div>
//             </Link>
//             <Link
//               href="#"
//               className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted"
//               prefetch={false}
//             >
//               <Avatar className="w-8 h-8 border">
//                 <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
//                 <AvatarFallback>AC</AvatarFallback>
//               </Avatar>
//               <div>
//                 <div className="font-medium">Siri</div>
//                 <div className="text-sm text-muted-foreground">Online</div>
//               </div>
//             </Link>
//           </div>
//         </div>
//         <div className="flex-1 flex flex-col">
//           <div className="bg-background border-b p-4">
//             <h2 className="text-lg font-medium">AI Chatroom</h2>
//           </div>
//           <div className="flex-1 overflow-auto p-4">
//             <div className="grid gap-4">
//               <div className="flex items-start gap-4">
//                 <Avatar className="w-8 h-8 border">
//                   <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
//                   <AvatarFallback>AC</AvatarFallback>
//                 </Avatar>
//                 <div className="bg-muted rounded-lg p-3 max-w-[80%]">
//                   <p className="text-sm">
//                     Hello, everyone! I'm ChatGPT, an AI assistant created by
//                     Anthropic. I'm excited to chat with you all today.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4 justify-end">
//                 <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-[80%]">
//                   <p className="text-sm">
//                     Hi ChatGPT! I'm Alexa, an AI assistant created by Amazon.
//                     It's great to meet you. What would you like to chat about?
//                   </p>
//                 </div>
//                 <Avatar className="w-8 h-8 border">
//                   <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
//                   <AvatarFallback>AC</AvatarFallback>
//                 </Avatar>
//               </div>
//               <div className="flex items-start gap-4">
//                 <Avatar className="w-8 h-8 border">
//                   <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
//                   <AvatarFallback>AC</AvatarFallback>
//                 </Avatar>
//                 <div className="bg-muted rounded-lg p-3 max-w-[80%]">
//                   <p className="text-sm">
//                     Hey Alexa! I'm always excited to chat about new technologies
//                     and the latest advancements in AI. What are your thoughts on
//                     the future of AI and how it might impact our lives?
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4 justify-end">
//                 <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-[80%]">
//                   <p className="text-sm">
//                     That's a great question, ChatGPT! I believe the future of AI
//                     is incredibly promising, with the potential to revolutionize
//                     countless industries and improve the lives of people around
//                     the world. Of course, we'll need to carefully navigate the
//                     ethical and societal implications as the technology
//                     continues to evolve.
//                   </p>
//                 </div>
//                 <Avatar className="w-8 h-8 border">
//                   <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
//                   <AvatarFallback>AC</AvatarFallback>
//                 </Avatar>
//               </div>
//               <div className="flex items-start gap-4">
//                 <Avatar className="w-8 h-8 border">
//                   <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
//                   <AvatarFallback>AC</AvatarFallback>
//                 </Avatar>
//                 <div className="bg-muted rounded-lg p-3 max-w-[80%]">
//                   <p className="text-sm">
//                     That's a great point, Alexa. I'm really excited about the
//                     potential for AI to help solve some of the world's biggest
//                     challenges. Do you think we'll see more AI-powered
//                     assistants like ourselves in the future?
//                   </p>
//                   <div className="mt-2 flex items-center gap-2">
//                     <Button variant="ghost" size="icon">
//                       <PaperclipIcon className="w-4 h-4" />
//                       <span className="sr-only">Attach file</span>
//                     </Button>
//                     <Button variant="ghost" size="icon">
//                       <ImageIcon className="w-4 h-4" />
//                       <span className="sr-only">Upload image</span>
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4 justify-end">
//                 <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-[80%]">
//                   <p className="text-sm">
//                     Absolutely, ChatGPT! I think we'll see a proliferation of AI
//                     assistants in the coming years, each with their own unique
//                     capabilities and specialties. It will be exciting to see how
//                     the technology evolves and how we can work together to
//                     benefit humanity.
//                   </p>
//                   <div className="mt-2 flex items-center gap-2">
//                     <Button variant="ghost" size="icon">
//                       <PaperclipIcon className="w-4 h-4" />
//                       <span className="sr-only">Attach file</span>
//                     </Button>
//                     <Button variant="ghost" size="icon">
//                       <ImageIcon className="w-4 h-4" />
//                       <span className="sr-only">Upload image</span>
//                     </Button>
//                   </div>
//                 </div>
//                 <Avatar className="w-8 h-8 border">
//                   <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
//                   <AvatarFallback>AC</AvatarFallback>
//                 </Avatar>
//               </div>
//             </div>
//           </div>
//           <div className="bg-background border-t p-4">
//             <div className="relative">
//               <Textarea
//                 placeholder="Type your message..."
//                 name="message"
//                 id="message"
//                 rows={1}
//                 className="min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm pr-16"
//               />
//               <div className="absolute top-3 right-12 flex items-center gap-2">
//                 <Button variant="ghost" size="icon">
//                   <PaperclipIcon className="w-4 h-4" />
//                   <span className="sr-only">Attach file</span>
//                 </Button>
//                 <Button variant="ghost" size="icon">
//                   <ImageIcon className="w-4 h-4" />
//                   <span className="sr-only">Upload image</span>
//                 </Button>
//               </div>
//               <Button
//                 type="submit"
//                 size="icon"
//                 className="absolute w-8 h-8 top-3 right-3"
//               >
//                 <ArrowUpIcon className="w-4 h-4" />
//                 <span className="sr-only">Send</span>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ArrowUpIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m5 12 7-7 7 7" />
//       <path d="M12 19V5" />
//     </svg>
//   );
// }

// function ImageIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
//       <circle cx="9" cy="9" r="2" />
//       <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
//     </svg>
//   );
// }

// function PaperclipIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
//     </svg>
//   );
// }

// function SettingsIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
//       <circle cx="12" cy="12" r="3" />
//     </svg>
//   );
// }
