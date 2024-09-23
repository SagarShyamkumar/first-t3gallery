import "~/styles/globals.css";

import { ClerkProvider } from '@clerk/nextjs'

import "@uploadthing/react/styles.css";
import { TopNav } from './_components/topnav';
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { extractRouterConfig } from "uploadthing/server";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "sonner";
import { CSPostHogProvider } from "./_analytics/provider";

export const metadata: Metadata = {
  title: "T3 Gallery",
  description: "Generated by SagarShyamkumar",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{ 
    children: React.ReactNode
    modal: React.ReactNode; 
  }>) 
  {
  return (
    <ClerkProvider>
      <CSPostHogProvider>  
        <html lang="en" >
        <NextSSRPlugin
              routerConfig={extractRouterConfig(ourFileRouter)}
            />
            <body className={`${GeistSans.variable}dark`}>
            <div className="grid h-screen grid-rows-[auto,1fr]">
              <TopNav />
              <main className="overflow-y-scroll">{children}</main>
            </div>
            {modal}
            <div id="modal-root" />
            <Toaster />
          </body>
          </html>
        </CSPostHogProvider>
    </ClerkProvider>
  );
}
