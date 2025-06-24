"use client"

import { LuCopy } from "react-icons/lu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { toast } from "sonner";
import type { Contact } from "./types/types";

export default function CopyToClipboard( {contact}: { contact: Contact } ) {

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(contact.clipboard);
      toast.success(`Copied ${contact.name} to clipboard!`)
    } catch (error) {
      toast.error("Failed to copy text!")
    }
  };

  return (
    <div className="flex items-center h-8 border border-gray-400 rounded-lg overflow-hidden">
      <a
        href={contact.url}
        target="_blank"
        className="flex items-center justify-center h-full px-2 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-300 bg-white dark:bg-[#00000040] hover:bg-teal-50 dark:hover:bg-[#2f2f2f3d] transition-all duration-200 flex-1"
      >
        {contact.name}
      </a>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button 
              onClick={handleCopyClick}
              className="group border h-full w-fit px-1.5 py-1 bg-[#282828d1] dark:bg-white font-bold text-white dark:text-black border-transparent hover:cursor-pointer transition-all duration-200">
              <LuCopy className="h-4 w-4 dark:bg-white group-hover:text-teal-300 dark:group-hover:text-teal-600 group-hover:scale-110" />
            </button>
          </TooltipTrigger>
          <TooltipContent
            className="z-[9999]">
            Copy
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>

  )
}