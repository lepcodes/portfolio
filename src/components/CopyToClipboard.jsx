"use client"

import { LuCopy } from "react-icons/lu";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";


export default function CopyToClipboard( {contact} ) {

  const [copied, setCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(contact.clipboard);
      setCopied(true);
      toast("Event has been created", 
        
      )
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  return (
    <div class="flex items-center h-8 border border-gray-400 rounded-lg overflow-hidden">
      <a
        href={contact.url}
        class="flex items-center justify-center h-full px-2 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-300 bg-white dark:bg-[#00000040] hover:bg-teal-50 dark:hover:bg-[#568e8b3d] transition-all duration-200 flex-1"
      >
        {contact.name}
      </a>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button 
              onClick={handleCopyClick}
              class="group border h-full w-fit px-1.5 py-1 bg-[#063b3dd1] dark:bg-white font-bold text-white dark:text-black border-transparent hover:cursor-pointer transition-all duration-200">
              <LuCopy class="h-4 w-4 dark:bg-white group-hover:text-teal-300 dark:group-hover:text-teal-600 group-hover:scale-110" />
            </button>
          </TooltipTrigger>
          <TooltipContent
            className="z-[9999]">
            Copy
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* <Toaster /> */}
    </div>

  )
}