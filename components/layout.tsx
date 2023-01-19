// import { type NextPage } from "next";
// import Link from "next/link";
import Head from "next/head";
import React, { FunctionComponent, ReactNode } from "react";
// import Header from "./login";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>My Chat</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        {children}
      </main>
    </>
  );
}