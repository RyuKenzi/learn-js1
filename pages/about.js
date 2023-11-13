import Image from "next/image";
import { Navbar } from "./component/navbar";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
  <>
  <Head>
  <title>Home | Learn Next JS</title>
  <meta name="keywords" content="next.js" />
  </Head>
  <Navbar />
  <Image src="/next.svg" width={300} height={300} alt="Next.js logo" />
  <h1>About</h1>
  </>
  );
}