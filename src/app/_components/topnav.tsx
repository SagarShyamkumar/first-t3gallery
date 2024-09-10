"use client";

import { SignInButton,SignedOut,SignedIn,UserButton } from "@clerk/nextjs";
import { UploadButton } from "../utils/uploadthing";
import { Server } from "http";
import { useRouter } from "next/navigation";

export function TopNav() {
  const router = useRouter();

  return(
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
          
        <div className="flex flex-row">
          <SignedOut>
            <SignInButton/>  
          </SignedOut>   
          <SignedIn>
            <UploadButton 
              endpoint="imageUploader"
              onClientUploadComplete={() => {
                router.refresh();
              }} />
            <UserButton/>
          </SignedIn>
        </div>
    </nav>
  )
}